# Docker for FE

## Cheat Sheet

```bash
docker run -d -e MYSQL_ROOT_PASSWORD=testtest ashleylai/fe-db:1
docker run -d -e DB_PASSWORD=testtest -e DB_HOST=172.17.0.3 -p 3000:3000 ashleylai/fe-web:1

docker ps -a
docker stop {container hash or name}
docker rm {container hash or name}

docker inspect {container hash or name}

docker-compose up -d
docker-compose down
```

## Concepts

- docker
- container
- image
- dockerhub
- docker-compose

## docker commands

```bash
docker run --name fe-db --rm -e MYSQL_ROOT_PASSWORD=testtest -d ashleylai/fe-db:1

docker run --rm -d -p 3000:3000 -e DB_PASSWORD=testtest -e DB_HOST=172.17.0.3 ashleylai/fe-web:1
```

![alt text](https://github.com/azole/docker-for-fe/blob/main/docs/images/docker-command.png?raw=true)

## docker-compose

### What is docker-compose

### How to run docker-compose

```bash
docker-compose -d

docker-compose down
```

## Build docker image

### What is docker image

### How to build docker image

## References

### Installation

- for Mac: 請注意晶片選擇
  - https://docs.docker.com/desktop/mac/install/
- for Windows: 請注意 Windows 版本，不是所有的 Windows 都可以裝 docker
  - https://docs.docker.com/desktop/windows/install/

### images for practice

- web images: https://hub.docker.com/r/ashleylai/fe-web
- db images: https://hub.docker.com/r/ashleylai/fe-db

### Documents

- [Docker Container 基礎入門篇 1](https://azole.medium.com/docker-container-%E5%9F%BA%E7%A4%8E%E5%85%A5%E9%96%80%E7%AF%87-1-3cb8876f2b14)
- [Docker for frontend developers](https://blog.logrocket.com/docker-for-front-end-developers/)
