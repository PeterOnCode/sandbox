// ./server.ts
import { createYoga } from 'graphql-yoga'
import { createServer } from 'http'
import { schema } from './schema'

const yoga = createYoga( {
  schema
} )

const server = createServer( yoga )
const port = 3001
server.listen( port )

console.info( `http://localhost:${ port }/graphql` )