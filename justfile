root_dir := justfile_directory()
nest_dir := root_dir + "/src/nest"
react_dir := root_dir + "/src/react"

default:
  @just --list

deps: deps-nest deps-react

deps-nest:
  cd "{{ nest_dir }}" && yarn install

deps-react:
  cd "{{ react_dir }}" && yarn install

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

    react)
      cd "{{ react_dir }}"
      GENERATE_SOURCEMAP=false PORT=3000 yarn start
      ;;
  esac