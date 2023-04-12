import { createYoga } from 'graphql-yoga'
import {
  useDisableIntrospection
} from '@graphql-yoga/plugin-disable-introspection'
import {
  blockFieldSuggestionsPlugin
} from '@escape.tech/graphql-armor-block-field-suggestions'


import { createAppSchema } from './schema.js'

export const yoga = createYoga(
  {
    graphiql : false,
    plugins : [ useDisableIntrospection(), blockFieldSuggestionsPlugin() ],
    schema : createAppSchema
  } )