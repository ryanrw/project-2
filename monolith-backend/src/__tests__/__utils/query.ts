/* istanbul ignore file */

import gql from "graphql-tag"

export const createQuery = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      status
    }
  }
`
