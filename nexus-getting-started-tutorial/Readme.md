# Getting started - Tutorial


## 0. Introduction


- <https://nexusjs.org/docs/getting-started/tutorial/chapter-introduction>
- <https://github.com/graphql-nexus/tutorial>

### 1. Setup and first query

```shell
yarn init
yarn add graphql graphql-yoga nexus
yarn add -D typescript ts-node-dev @types/node
```

`tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2018",
    "module": "commonjs",
    "lib": ["esnext"],
    "strict": true,
    "rootDir": ".",
    "outDir": "dist",
    "sourceMap": true,
    "esModuleInterop": true
  }
}
```

```ts
// `api/schema.ts`
import { makeSchema } from 'nexus'
import { join } from 'path'

export const schema = makeSchema( {
  types : [],
  outputs : {
    typegen : join( __dirname, '..', 'nexus-typegen.ts' ),
    schema : join( __dirname, '..', 'schema.graphql' )
  }
} )
```

```ts
// api/server.ts
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
```

### 2. Writing your first schema

> Snippet - 2.1. : `api/graphql/Post.ts`

```ts
// api/graphql/Post.ts
import { objectType } from 'nexus'

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.int('id')
    t.string('title')
    t.string('body')
    t.boolean('published')
  }
})
```

Modularizing your GraphQL type definitions can help scale your codebase.

> Snippet - 2.2. : `api/graphql/index.ts`

```ts
// api/graphql/index.ts
export * from './Post'
```

> Snippet - 2.2. : `api/schema.ts`

```ts
// api/schema.ts
import { makeSchema } from 'nexus'
import { join } from 'path'
import * as types from './graphql' // 1

export const schema = makeSchema( {
  types,
  outputs : {
    typegen : join( __dirname, '..', 'nexus-typegen.ts' ),
    schema : join( __dirname, '..', 'schema.graphql' )
  }
} )
```

**Note**: _It is considered best practice to pass your types directly from a "star 
import"_

#### 2.4. - SDL?

`schema.graphql` file at your project root. It contains a representation of 
your schema in a syntax called the **GraphQL Schema Definition Language** (SDL 
for short). In dev mode Nexus generates this for you at every app restart. 

#### 2.5. - Your first home-grown query

> Snippet - 2.3. : `api/graphql/Post.ts`

```ts
// api/graphql/Post.ts
import { extendType, objectType } from 'nexus'

// ----

export const PostQuery = extendType( {
  type : 'Query',
  definition( t ) {
    t.nonNull.list.field( 'drafts', {
      type : 'Post',

    } )
  }
} )
```


> Snippet - 2.4. : `api/graphql/Post.ts`

```ts
// api/graphql/Post.ts

// ...
export const PostQuery = extendType( {
  // ...
  definition( t ) {
    t.nonNull.list.field( 'drafts', {
      type : 'Post', // nonNull(list('Post')),
      resolve() {
        return [
          {
            id : 1,
            title : 'Nexus',
            body : '...',
            published : false
          }
        ]
      }
    } )
  }
} )
```