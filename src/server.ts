import express from 'express'
import swaggerUi from "swagger-ui-express"
import swaggerFile from "./swagger.json"
import { router } from './routes'

const app = express()

app.use(express.json())

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.get("/", (request, response) => {
  response.json({mesage: "hello world!!"})
})

app.use(router)

app.listen(4000, () => console.log("Server is running!"))