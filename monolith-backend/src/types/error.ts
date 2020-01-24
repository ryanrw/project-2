export type ErrorCode = `AuthenticationError` | `RuntimeError`

export interface ErrorOption {
  message: string
  code: ErrorCode
}
