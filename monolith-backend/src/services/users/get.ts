import createQuery, { database } from "@utils/db"
import { UserResultFromDatabase } from "users"
import { CustomError } from "@utils/error"

export async function getUser(username: string) {
  const selectQuery = createQuery.select({
    data: [`user_id`, `username`, `password`],
    from: [`users`],
    where: [`username=$1`],
  })
  const value = [username]

  const data = await database.query<UserResultFromDatabase>(selectQuery, value)

  const hasData = data.rowCount > 0

  if (!hasData) {
    throw new CustomError({
      message: `Incorrected Username`,
      code: `AuthenticationError`,
    })
  }

  const userInfo = data.rows[0]

  return userInfo
}
