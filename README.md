# StayBae Server

## Overview

This codebase acts as the server for the Staybae application. It is built using Express JS using Typescript. The API runs online on this link https://staybae-server-sb.onrender.com/api/properties.

## Dependencies

This application uses:

- Express JS - to provide the server capability
- Typescript - to enforce strict types
- Morgan - for logging
- Helmet - to protect from malicious requests
- Cors - to allow for same domain requests
- Compression - to compress request and responses
- Mongoose - to interact with MongoDB

## Docker

Under the `docker` folder there is a `docker-compose.yml` file that starts up a MongoDB container and initialises a new `staybae` database.

You should start this before starting the server

```
cd docker
docker-compose up -d
```

To bring the MongoDB down

```
cd docker
docker-compose down --remove-orphans --volumes
```

You can also download MongoDB Compass if you want to view the database locally and connect on `localhost:27017`.

## Plugins

Required plugins:

- ESLint
- Prettier

## Environment variables

You need to create an .env file and store the below variables:

```
PORT=8080
MONGO_PATH=<your mongo path>staybae?authSource=admin&retryWrites=true&w=majority
MONG_USER=<your mongo username>
MONGO_PASSWORD=<your mongo password>
```
Note: If you are using docker the environment variables will be different.

## Server

To run the server, you firstly need to download the dependencies from the root folder by running

```
npm install
```

To start the server, you can run

```
npm run dev
```

This will start the server on port `8080`. 

## Rest API

The API this server exposes is

```
/api/properties
```

| Request | API End point | Purpose |
| --- | --- | --- |
| POST | /api/properties | Create a new property |
| PUT | /api/properties | Update a property's details |

To enforce the properties into the client-side application, you need to sent the POST and GET requests that are on the `request.http` file.
