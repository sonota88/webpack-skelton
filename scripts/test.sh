#!/bin/bash

npm run build_test
mocha --reporter min
