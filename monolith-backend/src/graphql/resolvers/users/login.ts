import { validate } from "@service/users/check"
import { ValidateUserOption } from "users"
import { ApolloError } from "apollo-server"
import { generateJWT } from "@utils/jwt"

export default {
  Query: {
    login: async (_: any, args: ValidateUserOption) => {
      try {
        const { username, password } = args

        const data = await validate({ username, password })

        const jwt = generateJWT({
          userid: data.userid,
          username: data.username,
        })

        return {
          jwt,
        }
      } catch (error) {
        throw new ApolloError(error.message, error.code)
      }
    },
  },
}
