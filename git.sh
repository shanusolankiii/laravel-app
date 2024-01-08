#!/usr/bin/env bash

echo "GIT hook started"

composer install --ignore-platform-reqs

php artisan migrate
php artisan cache:clear
php artisan route:clear
php artisan config:clear
php artisan view:clear

npm install

echo "GIT hook finished"
