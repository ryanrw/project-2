// Utility and Helper
import { CustomError } from "@utils/error"
import createQuery, { database } from "@utils/db"

// Type and Interface
import { UpdateUserOption } from "users"

export async function updateUserInfo(
  updateUserid: string,
  option: UpdateUserOption
) {
  const [_, data] = createQuery.convertObjectToAssignment(option)

  const useridParamNumber = `$${Object.keys(option).length + 1}`

  const updateQuery = createQuery.update({
    table: `users`,
    set: data,
    where: [`userid=${useridParamNumber}`],
  })

  const extractOption: string[] = Object.values(option)
  const value = [...extractOption, updateUserid]

  try {
    await database.query(updateQuery, value)
  } catch (error) {
    throw new CustomError({
      message: error.message,
      code: `DatabaseError`,
    })
  }
}
