const express = require('express')
const app = express()
const router = require("./Route/auth")
const connectDB = require("./DB/connect")
const cors = require("cors")
const errorMiddleware = require('./middleware/error-middleware')

connectDB()

const corsOptions ={
    origin: "http://localhost:3001",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
}

app.use(cors(corsOptions))
app.use(express.json())
app.use("/api/auth", router)
app.use(errorMiddleware)

app.get("/", (req, res) => {
    res.status(200).send('Home page')
})

app.get("/login", (req, res) => {
    res.status(200).send('Login page')
})

app.get("/sign-up", (req, res) => {
    res.status(200).send('Register page')
})

const PORT = 3001


app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})

