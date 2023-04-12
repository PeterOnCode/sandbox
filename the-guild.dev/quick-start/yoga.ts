import {createYoga } from 'graphql-yoga'
import { createAppSchema } from './schema.js'

export const yoga = createYoga(
    {
      graphiql : {
        title: 'Error Masking',
        defaultQuery : /*GraphQL*/`
          {
            user(byId:  6)
          }`
      },
      schema : createAppSchema,
      // maskedErrors: false
    } )