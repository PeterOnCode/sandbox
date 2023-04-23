# Pothos - Simple Interfaces

- <https://github.com/hayes/pothos/tree/main/examples/simple-interfaces>
- <https://pothos-graphql.dev/docs/guide/objects>

## 1. Project setup

###### Snippet - 1. : `yarn`

```shell
yarn init
yarn add graphql graphql-yoga @pothos/core 
yarn add -D @types/node typescript ts-node-dev @faker-js/faker
```

###### Snippet - 2. : `package.json`

```json
{
  "scripts": {
    "start": "ts-node-dev server.ts",
    "dev:typecheck": "tsc --noEmit --watch",
    "build": "tsc"
  }
}
```

---

###### Snippet - 3. : `tsconfig.json`

```shell
npx tsc --init 
```

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": false,
    "target": "es2019",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true
  }
}

```

---

###### Snippet - 4. : `server.ts`

```shell
touch server.ts
```

```ts
// ./server.ts
import { createYoga } from 'graphql-yoga'
import { createServer } from 'http'

const yoga = createYoga( {
  schema
} )

const server = createServer( yoga )
const port = 3001
server.listen( port )

console.info( `http://localhost:${ port }/graphql` )
```

###### Snippet - 5. : `schema.ts`

```shell
touch schema.ts
```

```ts
// ./schema.ts

import SchemaBuilder from '@pothos/core'

const builder = new SchemaBuilder( {} )

builder.queryType( {
  fields : ( t ) => ( {
    hello : t.string( {
      args : {
        name : t.arg.string()
      },
      resolve : ( parent, { name } ) => `hello, ${ name || 'World' }`
    } )
  } )
} )

export const schema = builder.toSchema()
```

---

###### Snippet - 6. : `server.ts`

```ts
// ./server.ts

// ...
import { schema } from './schema'
// ...
```

---

###### Snippet - 7. : `npm run start`

```shell
npm run start
```

---

###### Snippet - 8. : `data.ts`

```shell
touch data.ts
```

```ts

```
