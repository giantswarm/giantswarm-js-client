
BRANCH := master

.PHONY: test generate

# Builds our JS source and runs tests inside a docker container
test:
	docker build -t giantswarm-js-client-tests .
	docker run --name giantswarm-js-client-tests --rm -ti giantswarm-js-client-tests

# Generate client code.
# Caution: This overwrites existing files, and does not clean up unused files.

generate: api-spec
	docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
			--config /local/swagger-codegen-conf.json \
			-i /local/api-spec/spec/spec.yaml \
			-g javascript \
			-o /local/

# Copies the public API spec YAML to a local folder
api-spec: clean
	mkdir -p api-spec
	git clone --depth=1 https://github.com/giantswarm/api-spec/

clean:
	rm -rf api-spec
	rm -rf src
	rm -rf test
	rm -rf docs
