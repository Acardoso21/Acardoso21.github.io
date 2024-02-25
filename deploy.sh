#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<acardoso21>.github.io
# git push -f git@github.com:Acardoso21/Acardoso21.github.io.git main

# if you are deploying to https://<acardoso21>.github.io/<REPO>
# git push -f git@github.com:acardoso21/<REPO>.git main:gh-pages

cd -