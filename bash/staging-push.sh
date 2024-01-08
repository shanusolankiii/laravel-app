#!/bin/bash

./vendor/bin/phpunit

if [ $? -ne 0 ]; then
    echo 'PHP Unit Failed'
    exit
else
    echo 'PHP Unit Passed'
fi

cb=$(git symbolic-ref --short HEAD)

echo "############################################"
git pull origin live
git pull origin staging
echo "############################################"

npm run build
git add public/build/assets/*
git add public/build/manifest.json
git commit -m "auto commit public files"
echo "############################################"

git checkout staging

echo "############################################"

git merge $cb

echo "############################################"

git push origin staging

echo "############################################"

git checkout $cb

echo "############################################"

git status
