test: docker-build
	docker run -ti giantswarm-js-client-tests npm test

build: docker-build
	docker run -v ${PWD}/dist:/usr/src/app/dist -ti giantswarm-js-client-tests ./node_modules/gulp/bin/gulp.js

docker-build:
	docker build -t giantswarm-js-client-tests .
