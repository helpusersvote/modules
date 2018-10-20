#!/bin/bash

# Stop on the first error
set -e

VERSION_TYPE=${VERSION_TYPE:-"patch"}

echo "Building new ${VERSION_TYPE} version of modules"

cd packages/helpusersvote-react && \
  npm version ${VERSION_TYPE} && \
  npm install && \
  npm publish

cd ../helpusersvote-bundle && \
  npm install -S @helpusersvote/react@latest

cd ../helpusersvote-react-docs && \
  npm install -S @helpusersvote/react@latest

cd ../../ && npm run docs

echo "Done publishing and building docs..."