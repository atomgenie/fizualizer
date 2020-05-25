#!/bin/bash

BASE_PWD=$PWD
rm -rf backend/build
yarn install || exit 1
cd fizualizer
yarn run build || exit 1
cd $BASE_PWD
cp -r fizualizer/build backend/build
cd backend
yarn run build || exit 1
cd $BASE_PWD
