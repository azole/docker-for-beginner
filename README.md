# Docker for FE

## What is docker?

### What is container?

### What is image?

## docker run

```bash
docker run --name fe-db --rm -e MYSQL_ROOT_PASSWORD=testtest -d ashleylai/fe-db:1

docker run --rm -d -p 3000:3000 -e DB_PASSWORD=testtest -e DB_HOST=172.17.0.3 ashleylai/fe-web:1
```

## docker-compose

### What is docker-compose

### How to run docker-compose

## Build docker image

### What is docker image

### How to build docker image

## References

### images for practice

- web images: https://hub.docker.com/r/ashleylai/fe-web
- db images: https://hub.docker.com/r/ashleylai/fe-db

### Documents
