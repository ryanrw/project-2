// Library
import merge from "lodash.merge"

// Local import
import root from "./root"
import createUser from "./users/create"
import login from "./users/login"
import updateUser from "./users/update"
import deleteUser from "./users/delete"
import createPost from "./posts/create"
import getPost from "./posts/get"
import getAllPost from "./posts/get-all"
import updatePost from "./posts/update"

export const resolvers = merge(
  {},
  root,
  createUser,
  login,
  updateUser,
  deleteUser,
  createPost,
  getPost,
  getAllPost,
  updatePost
)
