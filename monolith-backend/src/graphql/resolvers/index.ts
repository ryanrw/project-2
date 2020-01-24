import merge from "lodash.merge"

import root from "./root"
import createUser from "./users/create"

export const resolvers = merge({}, root, createUser)
