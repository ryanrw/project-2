import { CustomError } from "@utils/error"
import { ValidateUserOption } from "users"
import { compare } from "@utils/bcrypt"

import { getUser } from "./get"

export async function validate(option: ValidateUserOption) {
  const data = await getUser(option.username)

  const isPasswordCorrect = await compare(option.password, data.password)

  if (!isPasswordCorrect) {
    throw new CustomError({
      message: `Incorrected Password`,
      code: `AuthenticationError`,
    })
  }

  return isPasswordCorrect
}
