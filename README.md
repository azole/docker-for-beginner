# Docker for FE

## What is docker?

### What is container?

### What is image?

## docker run

```bash
docker run --name fe-db --rm -e MYSQL_ROOT_PASSWORD=testtest -d ashleylai/fe-db:1

docker run --rm -d -p 3000:3000 -e DB_PASSWORD=testtest -e DB_HOST=172.17.0.3 ashleylai/fe-web:1
```

![alt text](https://github.com/azole/docker-for-fe/blob/main/docs/images/docker-command.png?raw=true)

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

- [Docker Container 基礎入門篇 1](https://azole.medium.com/docker-container-%E5%9F%BA%E7%A4%8E%E5%85%A5%E9%96%80%E7%AF%87-1-3cb8876f2b14)
-
