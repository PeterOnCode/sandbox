// @ts-ignore
import express from "express"
import { graphqlHTTP } from "express-graphql"
import { buildSchema } from "graphql"
// @ts-ignore
import cors from 'cors'

const app = express();
app.use(cors())
let graphqlSchema = buildSchema(`
  type Book {
    title: String!
    year: Int!
    author: String!
  }
  
  type App { 
    books: [Book!]
  }
  
  type Query {
    app: App!
  }
  
  input BookInput {
    title: String!
    year: Int!
    author: String!
  }
  
  type Mutation {
    addBook(input: BookInput!): Book!
  }
    
`);
const context = {
  app: {
    book: [{ title: "Some title", year: 1980, author: "Anonymous" }]
  }
}
app.use("/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    graphiql: true,
    context,
    rootValue: {
      app: (_: any, ctx: typeof context) => {
        return ctx.app
      },
      addBook: (
        args: { input: { title: string, year: number, author: string } },
        ctx: typeof context
      ) => {
        const book = args.input
        ctx.app.book.push(book)
        return book
      }
    }
  })
)

app.listen(4000, () => {
    console.log('CORS-enabled web server listening on port 4000')
  }
)
