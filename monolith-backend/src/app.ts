// Library
import { ApolloServer } from "apollo-server"

// Configuration
import config from "./configs"

// GraphQL
import { typeDefs } from "./graphql/typedefs"
import { resolvers } from "./graphql/resolvers"

// Utility and Helper
import { context } from "./utils/context"

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  tracing: true,
})

export function startServer() {
  const { hostname, port } = config

  server.listen({ hostname, port }).then(({ url }) => {
    console.log(`server start at ${url}`)
  })
}
