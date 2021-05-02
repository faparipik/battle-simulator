<p align="center">
  <img src="https://www.jing.fm/clipimg/full/217-2177380_military-clipart-cute-cute-soldiers-clipart.png" width="320" alt="Battle Image" />
</p>
<h1 align="center">Battle Simulator</h1>

## Description

This is really simple battle simulator.

## Table of contents

- [Documentantion](#documentation)
- [Logs](#logs)
- [Setup](#setup)
- [Scripts](#scripts)

## Documentation

For documentation we are using Swagger.
Documentation can be found on http://localhost:3003/v1/api/

## Logs

- For logging and metrics we are using Elasticsearch-kibana-apm stack
- You can find dashboard on link http://localhost:3003/
- Then click on APM icon

- Username is: elastic
- Password is: elastic

- When changing password or username you need to change it in few places
- first is docker-compose file (elasticsearch service)
- second is kibana.yml file
- third is apm-server.yml file

## Setup

- Clone this project

- Set the environment variables:

> open .env file and change environment variables (if needed)

```bash
# build
docker-compose build

# start
docker-compose up
```

## Scripts

### Installation

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
