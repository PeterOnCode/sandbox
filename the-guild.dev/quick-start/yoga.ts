import { createYoga, maskError } from 'graphql-yoga'
import { createAppSchema } from './schema.js'

export const yoga = createYoga(
    {
      graphiql : {
        title : 'Error Masking',
        defaultQuery : /*GraphQL*/`
          {
            user(byId:  6)
          }`
      },
      schema : createAppSchema,
      maskedErrors : {
        maskError( error, message, isDev ) {
          if ( error?.extensions?.code === 'DOWNSTREAM_SERVICE_ERROR' ) {
            return error
          }

          return maskError( error, message, isDev )
        }
      }
    } )