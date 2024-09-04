#!/usr/bin/env bash

set -e

BASE=$(cd "$(dirname "$0")";pwd)
ROOT="${BASE}/.."

rm -rf "${ROOT}/buf_gen"
rm -rf "${ROOT}/src/gen"

npx buf generate


mkdir -p "${ROOT}/src/gen/mystiko/common"
mkdir -p "${ROOT}/src/gen/mystiko/config"
mkdir -p "${ROOT}/src/gen/mystiko/core"
mkdir -p "${ROOT}/src/gen/mystiko/storage"
mkdir -p "${ROOT}/src/gen/mystiko/service"
mkdir -p "${ROOT}/src/gen/mystiko/api"
mkdir -p "${ROOT}/src/gen/mystiko/data/v1"
mkdir -p "${ROOT}/src/gen/mystiko/loader/v1"
mkdir -p "${ROOT}/src/gen/mystiko/sequencer/v1"
mkdir -p "${ROOT}/src/gen/mystiko/relayer/v1"
mkdir -p "${ROOT}/src/gen/mystiko/screening/v1"

cp -r "${ROOT}"/buf_gen/mystiko/config/* "${ROOT}"/src/gen/mystiko/config
cp -r "${ROOT}"/buf_gen/mystiko/common/* "${ROOT}"/src/gen/mystiko/common
cp -r "${ROOT}"/buf_gen/mystiko/core/* "${ROOT}"/src/gen/mystiko/core
cp -r "${ROOT}"/buf_gen/mystiko/storage/* "${ROOT}"/src/gen/mystiko/storage
cp -r "${ROOT}"/buf_gen/mystiko/service/* "${ROOT}"/src/gen/mystiko/service
cp -r "${ROOT}"/buf_gen/mystiko/api/* "${ROOT}"/src/gen/mystiko/api
cp "${ROOT}"/buf_gen/mystiko/data/v1/* "${ROOT}"/src/gen/mystiko/data/v1
cp "${ROOT}"/buf_gen/mystiko/loader/v1/* "${ROOT}"/src/gen/mystiko/loader/v1
cp "${ROOT}"/buf_gen/mystiko/sequencer/v1/* "${ROOT}"/src/gen/mystiko/sequencer/v1
cp "${ROOT}"/buf_gen/mystiko/relayer/v1/* "${ROOT}"/src/gen/mystiko/relayer/v1
cp "${ROOT}"/buf_gen/mystiko/screening/v1/* "${ROOT}"/src/gen/mystiko/screening/v1

yarn prettier:fix
