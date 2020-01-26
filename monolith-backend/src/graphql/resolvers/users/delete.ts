// Library
import { AuthenticationError, ApolloError } from "apollo-server"

// Service
import { deleteUser } from "@service/users"
import { generateStatus } from "@service/status/generate"

// Type and Interface
import { Payload } from "jwt"

export default {
  Mutation: {
    deleteUser: async (_parent: any, _arg: any, context: Payload) => {
      if (!context.userid) {
        throw new AuthenticationError(`No jwt provide`)
      }

      try {
        await deleteUser(context.userid)

        return generateStatus(`Delete user success`)
      } catch (error) {
        throw new ApolloError(error.message, error.code)
      }
    },
  },
}
