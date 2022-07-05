# Docker for FE

## Cheat Sheet

```bash
# 確認 docker 是否有安裝好
docker -v

# 啟動 mysql 資料庫
docker run -d -e MYSQL_ROOT_PASSWORD=testtest ashleylai/fe-db:1
# 啟動 express server
docker run -d -e DB_PASSWORD=testtest -e DB_HOST=172.17.0.3 -p 3000:3000 ashleylai/fe-web:4

# 查看所有的 containers，包括關掉的
docker ps -a
# 停止運行一個 docker container
docker stop {container hash or name}
# 移除一個 docker container
docker rm {container hash or name}
# 檢視一個 container 的詳細資訊
docker inspect {container hash or name}

# 確認 docker-compose 是否有安裝好
docker-compose -v
# 用 docker-compose 啟動一組 containers
docker-compose up -d
# 關閉一組 containers
docker-compose down
```

## Concepts

- docker: 一個管理 container 的軟體，讓 container 變得容易使用
- container: 實質上是把 process 打包起來，「騙他」這個世界裡只有他存在。（也可以是數個 processes)
- image: 啟動 container 的模板
- dockerhub: 有點像是 github，但放的是 image
- docker-compose: 方便用來啟動一組 containers 的工具

重要觀念:

- (一般常說的) container 是一種 linux 技術 -> 非 linux 作業系統，實質上都是先啟動一台 linux vm，然後才在這個 linux vm 上跑 docker。

## docker commands

```bash
docker run --name fe-db --rm -e MYSQL_ROOT_PASSWORD=testtest -d ashleylai/fe-db:1

docker run --rm -d -p 3000:3000 -e DB_PASSWORD=testtest -e DB_HOST=172.17.0.3 ashleylai/fe-web:4
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
