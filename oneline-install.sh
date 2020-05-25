#!/bin/bash

add_link() {
    cd backend
    yarn link
}

build() {
    ./build.sh || exit 1
}

add_to_bin {
    sudo ln -s backend/fizualizer /usr/bin/fizualizer
}

update() {
    cd .fizualizer
    git checkout .
    git pull origin master
}

clone() {
    git clone https://github.com/atomgenie/fizualizer.git .fizualizer || exit 1
    cd .fizualizer
}

cd $HOME

if [ -d ".fizualizer" ]; then
    update
else
    clone
fi

build
add_to_bin
