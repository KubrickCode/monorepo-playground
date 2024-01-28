#!/bin/bash

# just 설치
curl --proto '=https' --tlsv1.2 -sSf https://just.systems/install.sh | bash -s -- --to /usr/local/bin/

# Air 설치
curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s -- -b /usr/local/bin

# nc, parallel 설치
apt-get update && apt-get install -y netcat-openbsd parallel

# Yarn 최신 버전 사용
yarn set version berry