#!/bin/bash

# Stop on the first error
set -e 

S3_CACHE_SECONDS=${S3_CACHE_SECONDS:-"120"}

if [ -z "$(echo $S3_BUCKET)" ]; then
	echo "Missing \$S3_BUCKET environment variable"
	exit 1
fi

echo "Deploying to s3://$S3_BUCKET$S3_PREFIX"

echo "Bootstrapping modules..."
npm install \
	&& npm run install-pkgs \
	&& npm run bootstrap

echo "Building Help Users Vote React components..."
cd packages/helpusersvote-react/ \
	&& NODE_ENV=production npm run build

echo "Building Help Users Vote bundle..."
cd ../helpusersvote-bundle/ \
	&& NODE_ENV=production npm run build

# Don't have `aws` installed? Try this:
# pip install awscli --upgrade --user
#
# Don't have `pip` installed? Try this:
# easy_install pip

aws s3 sync --cache-control max-age=${S3_CACHE_SECONDS} $(pwd)/dist s3://${S3_BUCKET}${S3_PREFIX}
