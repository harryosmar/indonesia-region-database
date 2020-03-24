# Location Service

## Requirements

- [install Go](https://golang.org/doc/install)


## Location Levels

```
- Country
    - Province
        - City
            - District
```


## Getting started

```
git clone git@bitbucket.org:wowbid/location-service.git

cd store-service

cp .env.example .env

go install

docker-compose up -d

make engine

./engine
```