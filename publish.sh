#!/bin/bash

S3_BUCKET=${1:-"example-bucket"}

echo "Building..."
cd packages/helpusersvote-bundle/ \
	&& npm install  \
	&& npm run build

aws s3 sync $(pwd)/packages/helpusersvote-bundle/dist s3://${S3_BUCKET}
