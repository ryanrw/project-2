import { getAllPost } from "../../../services/posts/get"
import { ApolloError } from "apollo-server"

export default {
  Query: {
    getAllPost: async () => {
      try {
        const posts = await getAllPost()

        return posts
      } catch (error) {
        throw new ApolloError(error.message, error.code)
      }
    },
  },
}
