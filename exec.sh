#!/usr/bin/env bash

docker build -t auth0-vue-Yotty-App .
docker run -p 3000:3000 --init auth0-vue-Yotty-App