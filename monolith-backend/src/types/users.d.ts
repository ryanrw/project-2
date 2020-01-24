export interface User {
  username: string
  email: string
  password: string
}

export interface ValidateUserOption {
  username: string
  password: string
}

export interface UserResultFromDatabase {
  userid: string
  username: string
  email: string
  password: string
}
