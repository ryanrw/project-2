import merge from "lodash.merge"

import root from "./root"
import createUser from "./users/create"
import checkUser from "./users/check"

export const resolvers = merge({}, root, createUser, checkUser)
