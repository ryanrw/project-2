import dotenv from "dotenv"
import path from "path"

const backendRootPath = path.join(__dirname, "../../")
const projectPath = path.join(backendRootPath, "../")

const EnvFile = dotenv.config()

const noEnvFileFound = EnvFile.error

if (noEnvFileFound) {
  dotenv.config({
    path: path.join(projectPath, ".env-sample"),
  })
}

export default {
  backendRootPath,
  projectPath,
  secret: process.env.SECRET,
  hostname: process.env.HOSTNAME || `localhost`,
  port: Number(process.env.PORT) || 4000,
}
