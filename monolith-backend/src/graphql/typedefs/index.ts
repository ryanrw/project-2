import root from "./root"
import status from "./status"
import createUser from "./users/create"
import login from "./users/login"
import JWT from "./jwt"
import updateUser from "./users/update"
import deleteUser from "./users/delete"
import post from "./posts"
import createPost from "./posts/create"
import getPost from "./posts/get"
import updatePost from "./posts/update"

export const typeDefs = [
  root,
  status,
  createUser,
  login,
  JWT,
  updateUser,
  deleteUser,
  createPost,
  post,
  getPost,
  updatePost,
]
