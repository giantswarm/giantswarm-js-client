.PHONY: test generate

# Builds our JS source and runs tests inside a docker container
test:
	docker build -t giantswarm-js-client-tests .
	docker run --name giantswarm-js-client-tests --rm=false -ti giantswarm-js-client-tests

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

# Copies the public API spec YAML to a local folder
api-spec:
	mkdir -p api-spec
	mkdir -p out
	curl -sS -o api-spec/spec.yaml https://docs.giantswarm.io/api/yaml/spec.yaml
	curl -sS -o api-spec/definitions.yaml https://docs.giantswarm.io/api/yaml/definitions.yaml
	curl -sS -o api-spec/parameters.yaml https://docs.giantswarm.io/api/yaml/parameters.yaml

clean:
	rm -rf api-spec
