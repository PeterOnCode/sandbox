# Build CRUD APIs Using Apollo Server(Graphql), MongoDB and Node.Js
based on Tom Hombergs

- <https://github.com/thombergs/code-examples/tree/master/nodejs/graphql/student-register>
- <https://reflectoring.io/tutorial-graphql-apollo-server-nodejs-mongodb/>

### Step 1.

```shell
mkdir student-register &&
cd student-register
```

### Step 2. - Install packages

```shell
npm init -y
npm install apollo-server graphql
npm install --save-dev typescript ts-node
npm install --save-dev @types/node 
npm install --save-dev nodemon
npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm i --save-dev mongodb dotenv
```

### Step 3. - `tsconfig.json`

- <https://khalilstemmler.com/blogs/typescript/node-starter-project/>
- <https://www.typescriptlang.org/docs/handbook/tsconfig-json.html>
- <https://www.typescriptlang.org/tsconfig>

```shell
./node_modules/.bin/tsc --init
```





