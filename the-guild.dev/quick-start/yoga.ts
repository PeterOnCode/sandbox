import { createYoga } from 'graphql-yoga'
import { useDisableIntrospection } from '@graphql-yoga/plugin-disable-introspection'

import { createAppSchema } from './schema.js'

export const yoga = createYoga(
    {
      graphiql : false,
      plugins: [useDisableIntrospection()],
      schema : createAppSchema
    } )