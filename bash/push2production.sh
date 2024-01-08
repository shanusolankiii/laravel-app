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
echo "############################################"

npm run build
git add public/build/assets/*
git add public/build/manifest.json
git commit -m "auto commit public files"
echo "############################################"

git checkout live

echo "############################################"

git merge $cb

echo "############################################"

git push origin live

echo "############################################"

git checkout $cb

echo "############################################"

git status
