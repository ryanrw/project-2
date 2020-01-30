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
import deletePost from "./posts/delete"
import createResumeOnlyOne from "./resume/create"
import getResume from "./resume/get"

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
  updatePost,
  deletePost,
  createResumeOnlyOne,
  getResume
)
