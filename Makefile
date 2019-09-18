
BRANCH := master

.PHONY: test generate

# Builds our JS source and runs tests inside a docker container
test:
	docker build -t giantswarm-js-client-tests .
	docker run --name giantswarm-js-client-tests --rm -ti giantswarm-js-client-tests

# Generate client code.
# Caution: This overwrites existing files, and does not clean up unused files.
generate: api-spec
	docker run --rm -it \
	  -v ${PWD}:/repo \
		jimschubert/swagger-codegen-cli:2.2.3 generate \
		--config /repo/swagger-codegen-conf.json \
		--input-spec /repo/api-spec/spec.yaml \
		--lang javascript \
		--output /repo
	mv README.md DOCS.md
	# fix superagent dependency due to security issue
	sed -i 's@"superagent": "3.5.2"@"superagent": "3.7.0"@;' package.json
	sed -i 's@"mocha": "~2.3.4"@"mocha": "^5.2.0"@;' package.json

# Copies the public API spec YAML to a local folder
api-spec:
	mkdir -p api-spec
	mkdir -p out
	curl -sS -o api-spec/spec.yaml https://raw.githubusercontent.com/giantswarm/api-spec/$(BRANCH)/spec/spec.yaml
	curl -sS -o api-spec/definitions.yaml https://raw.githubusercontent.com/giantswarm/api-spec/$(BRANCH)/spec/definitions.yaml
	curl -sS -o api-spec/parameters.yaml https://raw.githubusercontent.com/giantswarm/api-spec/$(BRANCH)/spec/parameters.yaml
	curl -sS -o api-spec/responses.yaml https://raw.githubusercontent.com/giantswarm/api-spec/$(BRANCH)/spec/responses.yaml

clean:
	rm -rf api-spec
	rm -rf src
	rm -rf docs
	rm -rf test

generate-help:
	docker run --rm -it jimschubert/swagger-codegen-cli:2.2.3 help generate
