import express from 'express'
import { router } from './routes'
const app = express()

app.use(express.json())

app.use(router)
app.get("/", (request, response) => {
  response.json({mesage: "hello world!!"})
})


app.listen(4000, () => console.log("Server is running!"))