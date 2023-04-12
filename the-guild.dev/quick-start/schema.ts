import { createSchema } from 'graphql-yoga'
import { GraphQLError } from 'graphql/error/index.js'

const users = [
  { id : '1', login : 'Laurin' },
  { id : '2', login : 'Saihaj' },
  { id : '3', login : 'Dotan' }
]

const typeDefs = /* GraphQL */ `
  type User {
    id : ID!
    login : String!
  }
  type Query {
    user(byId: ID!): User!
  }`

const resolvers = {
  Query : {
    user : async ( _, args ) => {
      const user = users.find( user => user.id === args.byId )

      if ( !user ) {
        throw new GraphQLError( `User with id '${args.byId}' not found`, {
          extensions : {
            http: {
              status: 400,
              headers: {
                'x-custom-header': 'some-value'
              }
            }
          }
        } )
      }

      return user
    }
  }
}
export const createAppSchema = createSchema( {
  typeDefs : typeDefs,
  resolvers : resolvers
} )