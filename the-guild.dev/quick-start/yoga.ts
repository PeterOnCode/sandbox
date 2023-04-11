import { createSchema, createYoga } from 'graphql-yoga'
import { createContext, GraphQLContext } from './context.js'

export const yoga = createYoga(
    {
      graphiql : {
        defaultQuery : /*GraphQL*/`
          query {
            someNumber
          }`,
      },
      schema : createSchema( {
        typeDefs : /* GraphQL */ `
          type Query {
            someNumber: Int!
          }
        `,
        resolvers : {
          Query : {
            someNumber( _, _args, context:GraphQLContext ) {
              return  context.someNumber2
            },
          },
        },
      } ),
      context: createContext,
      logging : true,
      maskedErrors : true,
    } )