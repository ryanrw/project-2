import root from "./root"
import status from "./status"
import createUser from "./users/create"
import checkUser from "./users/login"
import JWT from "./jwt"

export const typeDefs = [root, status, createUser, checkUser, JWT]
