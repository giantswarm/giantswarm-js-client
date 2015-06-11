 # API Proxy

When using the Giant Swarm API from JavaScript via XmlHTTPRequests inside a web browser, browsers will prevent access to hosts other than the one serving the current page.

The proxy server contained in this directory provides a way to add Cross Origin Resource Sharing (CORS) headers to all responses from the Giant Swarm API. In adddition, it handles `OPTIONS` requests which are sent by some browsers to determine the CORS policy of the server.

## Running the proxy service

The most convenient way to initiate the proxy server is using Docker, either natively (64bit Linux only) or via `boot2docker`(Mac OS, Windows).

To build and run the service:

```
make docker-build
make docker-run
```

This will make the service available via `http://<your-docker-ip>:8008`. You can check this by calling `http://<your-docker-ip>:8008/v1/ping`, which should show `"OK"`.

Quit the service using `Ctrl + C` in the terminal. On subsequent start, all you need is `make docker-run`.

Running the service without Docker requires a local `nginx` using the provided configuration file (`nginx.conf`). Note that this file uses port 80. Change this in case you need to.

