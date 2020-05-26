#!/bin/bash

add_link() {
    cd build
    yarn unlink
    yarn link
}

build() {
    make || exit 1
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
add_link
