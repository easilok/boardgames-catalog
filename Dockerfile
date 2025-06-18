FROM golang:1.24.3-bookworm as build

WORKDIR /app

COPY . .

RUN CGO_ENABLED=1 go install -tags extended github.com/gohugoio/hugo@v0.147.5

# Build

ARG ADDROLL_BASE_URL

RUN hugo --gc --minify --baseURL ${ADDROLL_BASE_URL}

FROM nginx:stable-alpine
COPY --from=build /app/public /usr/share/nginx/html
