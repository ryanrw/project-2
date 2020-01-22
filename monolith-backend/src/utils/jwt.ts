import jwt from "jsonwebtoken"

import config from "../configs"

interface Payload {
  userId: string
  username: string
}

export function generateJWT(payload: Payload) {
  const option: jwt.SignOptions = { expiresIn: "1h" }
  const newJWT = jwt.sign(payload, config.secret, option)

  return newJWT
}

export function extractJWT(token: string): Payload {
  const payload = jwt.verify(token, config.secret)

  return payload as Payload
}
