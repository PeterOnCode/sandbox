import { createServer } from 'http'

import { createYoga } from 'graphql-yoga'
import { schema } from './schema'

export const yoga = createYoga( {
  schema
} )

const server = createServer( yoga )
server.listen( 4000, () => {
  console.log( `Server ready at http://localhost:4000/graphql` )
} )