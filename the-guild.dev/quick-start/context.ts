export type GraphQLContext = {
  someNumber2: number
}

export function createContext(): GraphQLContext {
  return { someNumber2: 13}
}