import { validate } from "@service/users/check"
import { ValidateUserOption } from "users"
import { ApolloError } from "apollo-server"

export default {
  Query: {
    checkUser: async (_: any, args: ValidateUserOption) => {
      try {
        const { username, password } = args

        const isUserValid = await validate({ username, password })

        return isUserValid
      } catch (error) {
        throw new ApolloError(error.message, error.code)
      }
    },
  },
}
