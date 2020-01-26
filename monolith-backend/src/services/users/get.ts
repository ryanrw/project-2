import createQuery, { database } from "@utils/db"
import { UserResultFromDatabase } from "users"
import { CustomError } from "@utils/error"
import { UserInfo } from "users"

export async function getUser(user: UserInfo) {
  const [_, whereAssignment] = createQuery.convertObjectToAssignment(user)
  const selectQuery = createQuery.select({
    data: [`userid`, `email`, `username`, `password`],
    from: [`users`],
    where: whereAssignment,
  })
  const value = Object.values(user)

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
