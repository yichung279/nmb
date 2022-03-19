GO=go1.18

# TODO: deploy
# deploy/presign_url_handler:

build/presign_url_handler:
	mkdir -p build/backend/presign_url/
	$(GO) build -o ./build/backend/presign_url/handler github.com/yichung279/masuni/backend/presign_url/handler

# TODO: test
# test/presign_url_handler:

# TODO: lint
# lint/presign_url_handler:
