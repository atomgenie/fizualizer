GO_SOURCES = $(shell find ./backend -name '*.go')
REACT_SOURCES = $(shell find ./fizualizer \( -path './fizualizer/node_modules' -prune -o -name '*.ts' -o -name '*.tsx' -o -name '*.json' \) -a -type f )

all: build/fizualizer build/build build/package.json

build/fizualizer: $(GO_SOURCES) build
	cd backend/ && go build -o fizualizer
	mv backend/fizualizer build/fizualizer

build/build: $(REACT_SOURCES) build
	cd fizualizer && yarn run build
	mv fizualizer/build build/build

build/package.json: assets/package.json build
	cp assets/package.json build/package.json

build:
	mkdir build
