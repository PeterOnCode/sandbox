# GraphQL Yoga :: Tutorial > Basic

- <https://the-guild.dev/graphql/yoga-server/tutorial/basic>
- <https://github.com/dotansimha/graphql-yoga/tree/main/examples/hackernews>

## 1. Introduction

## 2. Project Setup

```shell
npm init -y
yarn add -D /
  typescript /
  @types/node /
  ts-node /
  ts-node-dev / 
  cross-env
```

> `package.json`

```json
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development ts-node-dev --exit-child --respawn src/main.ts",
    "start": "ts-node src/main.ts"
  }
}
```

```shell
npx tsc --init
```

### 3. Getting Started

- <https://www.howtographql.com/basics/0-introduction>

1. The GraphQL schema is where your GraphQL types are defined.
2. GraphQL's types are connected using fields, and they form a graph.
3. The `Query`, `Mutation` and `Subscription` types are special since they act as an 
   entry point to the graph.
4. The GraphQL schema acts as the data provider, and it offers a set of 
   capabilities the consumer can use.
5. To get data from a GraphQL schema, you need to write a GraphQL operation 
   (often referred to as query) that selects the data and fields you need.

```shell
yarn add @graphql-tools/schema graphql
```

> `src/schema.ts`

```ts
import {
  makeExecutableSchema
} from '@graphql-tools/schema'

const typeDefinitions = /*GraphQL*/`
  type Query {
    hello: String!
  }
`

const resolvers = {
  Query : {
    hello : () => 'Hello World!'
  }
}

export const schema = makeExecutableSchema( {
  resolvers : [ resolvers ],
  typeDefs : [ typeDefinitions ]
} )
```

`src/main.ts`

```ts
import { execute } from 'graphql/execution'
import { parse } from 'graphql/language'
import { schema } from './schema'

async function main() {
  const myQuery = parse(/*GraphQL*/`
    query {hello}
  ` )

  const result = await execute( {
    schema,
    document : myQuery
  } )

  console.log(result)
}

main()
```