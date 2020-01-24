require("module-alias/register")
import { ApolloServer } from "apollo-server"

import config from "@config"
import { typeDefs } from "@typedef/"
import { resolvers } from "@resolver/"

const server = new ApolloServer({ typeDefs, resolvers })

export function startServer() {
  const { hostname, port } = config

  server.listen({ hostname, port }).then(({ url }) => {
    console.log(`server start at ${url}`)
  })
}
