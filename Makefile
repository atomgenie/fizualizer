GO_SOURCES = $(shell find ./backend -name '*.go' -o -name '*.json')
REACT_SOURCES = $(shell find ./fizualizer \( -path './fizualizer/node_modules' -prune -o -name '*.ts' -o -name '*.tsx' -o -name '*.json' -o -name '*.scss' \) -a -type f )

.PHONY: all app

all: build/fizualizer build/build build/package.json

app: backend/output

backend/output: $(GO_SOURCES)

backend/resources/app: $(REACT_SOURCES)
	yarn install
	cd fizualizer && yarn run build:electron
	mv fizualizer/build backend/resources/app

build/fizualizer: $(GO_SOURCES) build
	cd backend/ && go build -o fizualizer -ldflags="-X 'main.webMode=true'"
	mv backend/fizualizer build/fizualizer

build/build: $(REACT_SOURCES) build
	yarn install
	cd fizualizer && yarn run build:web
	mv fizualizer/build build/

build/package.json: assets/package.json build
	cp assets/package.json build/package.json

build:
	mkdir build

gui:
	mkdir gui
