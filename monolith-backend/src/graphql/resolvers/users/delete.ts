import { deleteUser } from "@service/users/delete"
import { Payload } from "jwt"
import { AuthenticationError, ApolloError } from "apollo-server"
import { generateStatus } from "@service/status/generate"

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
