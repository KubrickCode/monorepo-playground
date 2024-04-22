root_dir := justfile_directory()
nest_dir := root_dir + "/src/nest"
next_dir := root_dir + "/src/next"
react_dir := root_dir + "/src/react"
fiber_dir := root_dir + "/src/go/fiber"

default:
  @just --list

codegen:
  #!/usr/bin/env bash
  set -euox pipefail
  cd "{{ next_dir }}"
  yarn codegen

deps: deps-nest deps-next deps-react

deps-nest:
  cd "{{ nest_dir }}" && yarn install

deps-next:
  cd "{{ nest_dir }}" && yarn install

deps-react:
  cd "{{ react_dir }}" && yarn install

install: install-docker install-psql

install-docker:
  #!/usr/bin/env bash
  if ! command -v docker &> /dev/null; then
    curl -fsSL https://raw.githubusercontent.com/devcontainers/features/main/src/docker-in-docker/install.sh | bash
  fi

install-psql:
  #!/usr/bin/env bash
  if ! command -v psql &> /dev/null; then
    DEBIAN_FRONTEND=noninteractive apt-get update && \
      apt-get -y install lsb-release && \
      wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add - && \
      echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" | tee  /etc/apt/sources.list.d/pgdg.list && \
      apt-get update && \
      apt-get -y install postgresql-client-13
  fi

makemigration name:
  just prisma migrate dev --create-only --name {{ name }}

migrate:
  just prisma migrate dev

# pgAdmin 실행
# DB 연결 시 호스트명은 `172.17.0.1`를 입력해야 함.
pgadmin:
  #!/usr/bin/env bash
  container=monorepo_playground_pgadmin
  if docker start $container &> /dev/null; then
    echo "Container $container started."
  else
    echo "Failed to start container $container. Creating a new one..."
    docker run \
      --name $container \
      -e PGADMIN_DEFAULT_EMAIL=admin@example.com \
      -e PGADMIN_DEFAULT_PASSWORD=admin \
      -e PGADMIN_CONFIG_SERVER_MODE=False \
      -e PGADMIN_CONFIG_MASTER_PASSWORD_REQUIRED=False \
      -p 8080:80 \
      dpage/pgadmin4
  fi

prisma *args:
  #!/usr/bin/env bash
  set -euox pipefail
  cd "{{ nest_dir }}"
  yarn prisma {{ args }}

run svc *args:
  #!/usr/bin/env bash
  set -euox pipefail
  case {{ svc }} in
    web)
      parallel --halt now,fail,1% -j 2 -u ::: "just run nest" "just run react" 'while ! nc -z localhost 3000; do sleep 1; done && open http://localhost:3000'
      ;;

    nest)
      cd src/nest
      LOGGER_LEVEL=debug PORT=3001 yarn start:dev
      ;;

    next)
      cd src/next
      LOGGER_LEVEL=debug PORT=3003 yarn dev
      ;;

    react)
      cd "{{ react_dir }}"
      GENERATE_SOURCEMAP=false PORT=3000 yarn start
      ;;

    fiber)
      cd "{{ fiber_dir }}"
        PORT=3002 air
        ;;
      

  esac

sync-locales:
  #!/usr/bin/env bash
  set -euox pipefail
  rsync -av --delete "{{ next_dir }}/locale/" "{{ nest_dir }}/locale/"