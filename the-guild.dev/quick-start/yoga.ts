import { createYoga } from 'graphql-yoga'
import {
  useDisableIntrospection
} from '@graphql-yoga/plugin-disable-introspection'

import { createAppSchema } from './schema.js'

export const yoga = createYoga(
  {
    graphiql : true,
    plugins : [ useDisableIntrospection( {
      isDisabled : ( request ) => request.headers.get(
        'x-allow-introspection' ) !== 'secret-access-key'
    } ) ],
    schema : createAppSchema
  } )