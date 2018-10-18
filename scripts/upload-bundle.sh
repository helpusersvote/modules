#!/bin/bash

if [ -z "$(echo $S3_BUCKET)" ]; then
	echo "Missing \$S3_BUCKET environment variable"
	exit 1
fi

echo "Deploying to s3://$S3_BUCKET$S3_PREFIX"

echo "Building Help Users Vote bundle..."
cd packages/helpusersvote-bundle/ \
	&& npm install  \
	&& npm run build

# Don't have `aws` installed? Try this:
# pip install awscli --upgrade --user
#
# Don't have `pip` installed? Try this:
# easy_install pip

aws s3 sync $(pwd)/dist s3://${S3_BUCKET}${S3_PREFIX}
