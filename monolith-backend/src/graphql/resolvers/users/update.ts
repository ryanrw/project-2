import { updateUserInfo } from "@service/users/update"
import { UpdateUserOption } from "users"
import { Payload } from "jwt"
import { ApolloError, AuthenticationError } from "apollo-server"
import { getUser as getNewUserInfo } from "@service/users/get"
import { generateJWT } from "@utils/jwt"

export default {
  Mutation: {
    updateUser: async (_: any, arg: UpdateUserOption, context: Payload) => {
      if (!context.userid) {
        throw new AuthenticationError(`No jwt provided`)
      }

      try {
        await updateUserInfo(context.userid, arg)

        const data = await getNewUserInfo({ userid: context.userid })

        const jwt = generateJWT({
          userid: data.userid,
          username: data.username,
        })

        return { jwt }
      } catch (error) {
        throw new ApolloError(error.message, error.code)
      }
    },
  },
}
