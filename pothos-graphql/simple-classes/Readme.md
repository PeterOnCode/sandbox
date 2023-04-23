# Pothos - Simple classes

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
server.list( port )

console.info( `http://localhost:${ port }/graphql` )
```

---

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
// data.ts
import { faker } from '@faker-js/faker'

faker.seed( 123 )

export class User {
  firstName
  lastName

  constructor ( public id : string ) {
    this.firstName = faker.name.firstName()
    this.lastName = faker.name.lastName()
  }
}

export class Post {
  authorId
  title
  content

  constructor ( public id : string ) {
    this.authorId = String( faker.datatype.number( { min : 1, max : 100 } ) )
    this.title = faker.lorem.text()
    this.content = faker.lorem.paragraphs( 2 )
  }
}

export class Comment {
  postId
  authorId
  comment

  constructor ( public id : string ) {
    this.authorId = String( faker.datatype.number( { min : 1, max : 100 } ) )
    this.postId = String( faker.datatype.number( { min : 1, max : 100 } ) )
    this.comment = faker.lorem.text()
  }
}

export const Users = new Map<string, User>()
export const Posts = new Map<string, Post>()
export const Comments = new Map<string, Comment>()

// Create 100 users, posts and comments
for ( let i = 1; i <= 100; i += 1 ) {
  Users.set( String( i ), new User( String( i ) ) )
  Posts.set( String( i ), new Post( String( i ) ) )
  Comments.set( String( i ), new Comment( String( i ) ) )
}
```

---

###### Snippet - 9. : `schema.ts`

```ts
// schema.ts
import SchemaBuilder from '@pothos/core'
import { Post, Posts, User, Users } from './data'

const builder = new SchemaBuilder( {} )
const DEFAULT_PAGE_SIZE = 10

builder.objectType( User, {
  name : 'User',
  fields : ( t ) => ( {
    id : t.exposeID( 'id' ),
    firstName : t.exposeString( 'firstName' ),
    lastName : t.exposeString( 'lastName' ),
    fullName : t.string( {
      resolve : ( user ) => `${ user.firstName } ${ user.lastName }`
    } ),
    posts : t.field( {
      type : [ Post ],
      resolve : ( parent ) => [ ...Posts.values() ].filter( post => post.authorId === parent.id )
    } )
  } )
} )

builder.objectType( Post, {
  name : 'Post',
  fields : ( t ) => ( {
    id : t.exposeID( 'id' ),
    title : t.exposeString( 'title' ),
    content : t.exposeString( 'content' ),
    author : t.field( {
      type : User,
      nullable : true,
      resolve : ( post ) => [ ...Users.values() ].find( ( user ) => user.id === post.authorId )
    } )
  } )
} )

builder.queryType( {
  fields : ( t ) => ( {
    post : t.field( {
      type : Post,
      nullable : true,
      args : {
        id : t.arg.id( { required : true } )
      },
      resolve : ( root, { id } ) => Posts.get( String( id ) )
    } ),
    user : t.field( {
      type : User,
      nullable : true,
      args : {
        id : t.arg.id( { required : true } )
      },
      resolve : ( root, { id } ) => Users.get( String( id ) )
    } )
  } )
} )

export const schema = builder.toSchema()

```