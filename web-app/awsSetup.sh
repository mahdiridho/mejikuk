#!/bin/bash

bucket='www.mejikuk.com'
profile='puan'

npm run build
cd build
echo $profile
echo $bucket

aws --profile $profile s3 sync . s3://$bucket --delete --sse AES256 --cache-control no-cache
aws --profile $profile s3 cp s3://$bucket/ s3://$bucket/ --exclude "*" --include "/assets/**/*" --recursive --metadata-directive REPLACE --sse AES256 --cache-control max-age=604800
aws --profile $profile s3 cp s3://$bucket/ s3://$bucket/ --exclude "*" --include "manifest.json" --metadata-directive REPLACE --sse AES256 --cache-control max-age=604800 --content-type application/json
aws --profile $profile s3 cp s3://$bucket/ s3://$bucket/ --exclude "*" --include "*.js" --exclude "pwabuilder-sw.js" --recursive --metadata-directive REPLACE --sse AES256 --cache-control max-age=604800 --content-type application/javascript