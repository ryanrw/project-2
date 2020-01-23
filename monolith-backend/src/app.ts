import { ApolloServer, gql } from "apollo-server"

import config from "./configs"

const typeDefs = gql`
  type User {
    userId: String!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    getUser: User
  }
`

const user = {
  userId: "test",
  username: "test",
  email: "test",
  password: "test",
}

const resolvers = {
  Query: {
    getUser: () => user,
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

export function startServer() {
  const { hostname, port } = config

  server.listen({ hostname, port }).then(({ url }) => {
    console.log(`server start at ${url}`)
  })
}
