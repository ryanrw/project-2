import { User } from "users"

import createQuery, { database } from "@utils/db"
import { encrypt } from "@utils/bcrypt"

export async function createUser(opt: User) {
  try {
    const encryptedPassword = await encrypt(opt.password)

    const query = createQuery.insert(`users`, [`username`, `email`, `password`])
    const values = [opt.username, opt.email, encryptedPassword]

    await database.query(query, values)
  } catch (error) {
    throw new Error(`Cannot add data: ${error.message}`)
  }
}
