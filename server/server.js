const express = require("express")
const app = express()
require("dotenv").config()
const connectDB = require("./config/db")
const PORT = process.env.PORT || 5000

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"));

// connect to the mongodb database
connectDB()

app.use('/api/items', require("./routes/items"))

app.listen(PORT, console.log("Server is running on port ", PORT))