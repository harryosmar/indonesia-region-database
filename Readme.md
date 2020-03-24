# Indonesia Regions Database

in [MongoDB](https://github.com/harryosmar/indonesia-region-database/tree/master/.docker/mongo) and [MySQL](https://github.com/harryosmar/indonesia-region-database/tree/master/.docker/mysql)

```
# one simple command to setup both Mongo & MySQL database with complete records

docker-compose up -d
```

Data Structures

```
- Country
  - Province
    - City
      - District
        -SubDistrict
```


## links

- https://github.com/ibnux/data-indonesia
- https://raw.githubusercontent.com/edwardsamuel/Wilayah-Administratif-Indonesia/master/mysql/indonesia.sql
