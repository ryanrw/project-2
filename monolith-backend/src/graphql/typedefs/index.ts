import root from "./root"
import status from "./status"
// @todo remove this if unuse
import user from "./users"
import createUser from "./users/create"
import checkUser from "./users/check"

export const typeDefs = [root, status, user, createUser, checkUser]
