import { createSchema, createYoga } from 'graphql-yoga'
import { fetch } from '@whatwg-node/fetch'

export const yoga = createYoga(
    {
      graphiql : {
        defaultQuery : /*GraphQL*/`
          query {
            greeting
          }`
      },
      schema : createSchema( {
        typeDefs : /* GraphQL */ `
          type Query {
            greeting: String!
          }
        `,
        resolvers : {
          Query : {
            greeting : async () => {
              return await fetch( 'http://localhost:9876/greetings' ).then(
                res => res.text()
              )
            }
          }
        }
      } )
    } )