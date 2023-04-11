import { createSchema, createYoga } from 'graphql-yoga'

// Provide your schema
export const yoga = createYoga( {
  graphiql: {
    defaultQuery: /*GraphQL*/`
    query {
      logHeader
    }`,

  },
  schema : createSchema( {
    typeDefs : /* GraphQL */ `
      type Query {
        logHeader: Boolean
      }
    `,
    resolvers : {
      Query : {
        logHeader(_, _args, context) {
          return !!context.request.headers.get('x-foo')
        }
      },
    },
  } ),
  logging : true,
  maskedErrors : true,
} )