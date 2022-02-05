# apollo-federation test project

Distributed GraphQl server architecture using Apollo Federation.

Apollo Federation is an architecture for declaratively composing APIs into a unified graph. Each team can own their slice of the graph independently, empowering them to deliver autonomously and incrementally.

--------------------------------

## Pre-requisites

Install [Docker](https://www.docker.com/products/docker-desktop)
- be sure to have the docker desktop app installed and start it for the first time so all the dependecies will be installed like docker-commposer.

`$ brew install docker`

-------------------------------

## Supergraph Schema

There are multiple ways to compose a supergraph schema from our subgraph schemas:

- Locally using the [Rover CLI](https://www.apollographql.com/docs/rover/).
- Via managed federation in [Apollo Studio](https://www.apollographql.com/docs/studio/).

Further [documentation](https://www.apollographql.com/docs/federation/quickstart/#3-compose-the-supergraph-schema).

-------------------------------

### Using Rover CLI

From your project directory, run the following commands in your terminal:

```bash
npm install -g @apollo/rover

rover supergraph compose --config ./supergraph-config.yaml

rover supergraph compose --config ./supergraph-config.yaml > supergraph.graphql
```

We can now edit our gateway/gateway.ts file to pull in our composed schema. Replace the file's contents with the following:
```bash
const { readFileSync } = require('fs');

const supergraphSdl = readFileSync('./../supergraph.graphql').toString();

const gateway = new ApolloGateway({
  supergraphSdl
});
```
-------------------------------

### Using Apollo Studio

Our gateway currently loads its composed supergraph schema from a file on startup. This means that whenever the schema changes, the gateway needs to restart to load the new version.

We can avoid this downtime by instead composing our supergraph schema with managed federation, a free cloud-based service that's part of Apollo Studio. Steps in order to do this:

- Sigh up for [Apollo Studio](https://www.apollographql.com/docs/studio/getting-started/).
- [Authenticate Rover](https://www.apollographql.com/docs/rover/configuring/) with Apollo Studio. Obtain an API key and Provide the API key to Rover.
- Register subgraph schema.

```bash
rover subgraph publish <GRAPH_NAME> \
  --routing-url https://rover.apollo.dev/characters/reviews/graphql \
  --schema ./schema.graphql \
  --name characters
```

-  Authenticate the gateway with Apollo Studio. Obtain a graph API key for your Studio graph by [following these steps](https://www.apollographql.com/docs/studio/api-keys/#graph-api-keys). Copy its value.
- Create a new file named `.env` in the gateway project folder.
- Replace the values from the `.env.template` with the correct values.
-------------------------------

## Running the project

-------------------------------

### Run locally 

Cd into subgraphs/characters and
```
npm i && npm run start
```
Cd into subgraphs/species and 
```
npm i && npm run start
```
Now that subgraphs are started cd into gateway and 
```
npm i && npm run start
```

You should see the following messages for the servers:
```bash
🚀 Species subgraph ready at http://localhost:4001/
🚀 Character subgraph ready at http://localhost:4002/
🚀 Server ready at http://localhost:4000/
```

Use the url to see the Apollo Studio.

-------------------------------

### Using Docker 

Starting the servers seperately.

Cd into gateway or each of the subgraphs. 
Build the Docker image

```bash
docker build -t image_tag .  
```

Start the Docker container (change the port with the one specified in the Dockerfile and image_tag with the one created above).

```bash
docker run -p 4000:4000 image_tag
```

-------------------------------

### Using Docker Compose


--------------------------------

## Usefull comands 

-------------------------------


See in which network the container belongs to:
```bash
docker inspect -f '{{range $key, $value := .NetworkSettings.Networks}}{{$key}} {{end}}' <container_name>
````
List of all Docker networks:
```bash
docker network ls   
```
List of all Docker containers:
```bash
docker container ls
```
Find the IP address of a container:
```bash
docker inspect <container_id> | grep IPAddress
```

sls --aws-profile <PROFILE> deploy
