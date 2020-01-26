require("module-alias/register")
import { ApolloServer, AuthenticationError } from "apollo-server"
import config from "@config"
import { typeDefs } from "@typedef/"
import { resolvers } from "@resolver/"
import { extractJWT } from "@utils/jwt"

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: context => {
    const authorization = context.req.headers.authorization || ""

    if (authorization) {
      const jwt = authorization.replace("Bearer ", "")

      const payload = extractJWT(jwt)

      return payload
    }

    return ""
  },
})

export function startServer() {
  const { hostname, port } = config

  server.listen({ hostname, port }).then(({ url }) => {
    console.log(`server start at ${url}`)
  })
}
