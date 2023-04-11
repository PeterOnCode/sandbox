import {createYoga } from 'graphql-yoga'
import { createAppSchema } from './schema.js'
import { createContext } from './context.js'

export const yoga = createYoga(
    {
      graphiql : {
        defaultQuery : /*GraphQL*/`
          {
            user(byId: 1) {
              login
            }
          }`
      },
      schema : createAppSchema,
      context: createContext
    } )