# Docker for FE

```bash
docker run --name fe-db --rm -e MYSQL_ROOT_PASSWORD=testtest -d ashleylai/fe-db:1

docker run --rm -d -p 3000:3000 -e DB_PASSWORD=testtest -e DB_HOST=172.17.0.3 ashleylai/fe-web:1
```

## docker-compose
