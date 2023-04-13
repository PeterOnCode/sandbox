# Getting started - Tutorial


## 0. Introduction


- <https://nexusjs.org/docs/getting-started/tutorial/chapter-introduction>
- <https://github.com/graphql-nexus/tutorial>

### 1. Setup and first query

```shell
yarn init
yarn add graphql graphql-yoga nexus
yarn add -D typescript ts-node-dev
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

