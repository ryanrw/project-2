import bcrypt from "bcrypt"

const saltRound = 10

export async function encrypt(password: string): Promise<string> {
  const hash = await bcrypt.hash(password, saltRound)

  return hash
}

export async function compare(
  password: string,
  hash: string
): Promise<boolean> {
  const isPasswordMatch = await bcrypt.compare(password, hash)

  return isPasswordMatch
}
