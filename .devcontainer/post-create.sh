#!/bin/bash

# just 설치
curl --proto '=https' --tlsv1.2 -sSf https://just.systems/install.sh | bash -s -- --to /usr/local/bin/

# Yarn 최신 버전 사용
yarn set version berry