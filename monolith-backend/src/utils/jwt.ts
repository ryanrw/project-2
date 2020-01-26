import jwt from "jsonwebtoken"
import config from "@config"
import { Payload } from "jwt"
import { CustomError } from "./error"

export function generateJWT(payload: Payload) {
  const option: jwt.SignOptions = { expiresIn: "1h" }
  const newJWT = jwt.sign(payload, config.secret, option)

  return newJWT
}

export function extractJWT(token: string): Payload {
  try {
    const payload = jwt.verify(token, config.secret)

    return payload as Payload
  } catch (error) {
    throw new CustomError({
      message: error.message,
      code: `JWTError`,
    })
  }
}
