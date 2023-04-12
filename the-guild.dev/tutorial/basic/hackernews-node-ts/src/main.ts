import { execute } from 'graphql/execution'
import { parse } from 'graphql/language'
import { schema } from './schema'

async function main() {
  const myQuery = parse(/*GraphQL*/`
    query {hello}
  ` )

  const result = await execute( {
    schema,
    document : myQuery
  } )

  console.log(result)
}

main()