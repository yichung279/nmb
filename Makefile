GO=go1.18

# TODO: deploy
# deploy/presign_url_handler:

build/presign_url_handler:
	mkdir -p build/backend/presign_url/
	$(GO) build -o ./build/backend/presign_url/handler github.com/yichung279/masuni/backend/presign_url/handler

test/presign_url_handler:
	go test ./backend./presign_url/...

lint/presign_url_handler:
	cd backend && golangci-lint ./presign_url/...

test/backend:
	go test ./backend/...

lint/backend:
	cd backend && golangci-lint ./...
