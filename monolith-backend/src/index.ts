import fastify from "fastify"

const app = fastify({
  logger: true,
})

app.get("/", async (req, reply) => {
  reply.send({ hello: "world" })
})

app.listen(8080, "127.0.0.1", (err, addr) => {
  if (err) {
    app.log.error(err)
  }

  app.log.info(`server start at ${addr}`)
})
