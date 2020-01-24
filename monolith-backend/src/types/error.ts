export type ErrorCode =
  | `AuthenticationError`
  | `DatabaseError`
  | `BcryptError`
  | `RuntimeError`

export interface ErrorOption {
  message: string
  code: ErrorCode
}
