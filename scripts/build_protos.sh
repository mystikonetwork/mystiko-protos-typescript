#!/usr/bin/env bash

set -e

BASE=$(cd "$(dirname "$0")";pwd)
ROOT="${BASE}/.."

rm -rf "${ROOT}/buf_gen"
rm -rf "${ROOT}/src/gen"

npx buf generate

mkdir -p "${ROOT}/src/gen/mystiko/data/v1"
mkdir -p "${ROOT}/src/gen/mystiko/sequencer/v1"

cp "${ROOT}"/buf_gen/mystiko/data/v1/* "${ROOT}"/src/gen/mystiko/data/v1
cp "${ROOT}"/buf_gen/mystiko/sequencer/v1/* "${ROOT}"/src/gen/mystiko/sequencer/v1

yarn prettier:fix
