import merge from "lodash.merge"

import root from "./root"
import createUser from "./users/create"
import login from "./users/login"

export const resolvers = merge({}, root, createUser, login)
