import { User } from "users"

import { createUser as create } from "@service/users/create"
import { generateStatus } from "@service/status/generate"
import { ApolloError } from "apollo-server"

export default {
  Mutation: {
    createUser: async (_: any, args: User) => {
      try {
        await create(args)

        return generateStatus(`success`)
      } catch (error) {
        throw new ApolloError(error.message, error.code)
      }
    },
  },
}
