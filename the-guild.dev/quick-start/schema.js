import { createServer } from 'node:http'

import { makeExecutableSchema } from '@graphql-tools/schema'
import { createYoga } from 'graphql-yoga'

export const schema = makeExecutableSchema( {
  typeDefs : /* GraphQL */`
    type Query {
      hello: String
    }`,
  resolvers: {
    Query: {
      hello:() => 'world'
    }
  }
} )

const yoga = createYoga({schema, graphiql: {
  defaultQuery: /* GraphQL */ `
    query {
      hello
    }
  `
  }})
const server = createServer(yoga)

server.listen(4000, ()=>{
  console.info('Server is running on http://localhost:4000/graphql')
})