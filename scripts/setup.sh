#!/bin/bash

__dir="$(cd "$(dirname "${0}")" && pwd)"

(
  cd "${__dir}/../"
  mkdir dist dist_test
  npm install
  bundle install --path=vendor/bundle
)
