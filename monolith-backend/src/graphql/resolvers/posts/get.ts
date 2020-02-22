import { getPost } from "../../../services/posts/get"
import { ApolloError } from "apollo-server"
import { GetPostOption } from "post"

export default {
  Query: {
    getPost: async (_: any, args: GetPostOption) => {
      try {
        const post = await getPost(args)

        return post
      } catch (error) {
        throw new ApolloError(error.message, error.code)
      }
    },
  },
}
