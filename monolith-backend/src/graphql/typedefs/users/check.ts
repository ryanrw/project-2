import { gql } from "apollo-server"

export default gql`
  extend type Query {
    checkUser(username: String!, password: String): Boolean!
  }
`
