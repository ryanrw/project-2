import { deletePost } from "../../../services/posts/delete"
import { DeletePostResolverOption } from "post"
import { Payload } from "jwt"
import { AuthenticationError, ApolloError } from "apollo-server"
import { checkPostOwner } from "../../../services/posts/authorization"
import { generateStatus } from "../../../services/status/generate"

export default {
  Mutation: {
    deletePost: async (
      _: any,
      args: DeletePostResolverOption,
      context: Payload
    ) => {
      if (!context.userid) {
        throw new AuthenticationError(`No JWT provided`)
      }

      try {
        await checkPostOwner(args.postid, context.userid)

        await deletePost(args.postid)

        return generateStatus(`Delete post successfully`)
      } catch (error) {
        throw new ApolloError(error.message, error.code)
      }
    },
  },
}
