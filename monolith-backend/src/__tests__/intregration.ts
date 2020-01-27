import { createTestClient } from "apollo-server-testing"

import { constructTestServer } from "./__utils/construct"
import { createQuery } from "./__utils/query"

describe(`Mutation`, () => {
  it("create user `test`", async () => {
    const server = constructTestServer({ context: () => "" })

    const { mutate } = createTestClient(server)

    const response = await mutate({
      mutation: createQuery,
      variables: {
        username: `test`,
        email: `test@test.com`,
        password: `1234`,
      },
    })

    expect(response.data.createUser.status).toBe(`success`)
  })
})
