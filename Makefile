test: build
	docker run -ti giantswarm-js-client-tests npm test

build:
	docker build -t giantswarm-js-client-tests .
