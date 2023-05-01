const express = require("express")
const graphqlHTTP = require("express-graphql").graphqlHTTP
// const graphqlHttp = require('express-graphql');
const cors = require('cors');
const colors = require("colors")
require("dotenv").config()
const port = process.env.PORT || 8000
const schema = require("./schema/schema")
const connectDB = require("./config/db")

const app = express()

// connect to database
connectDB()

app.use(cors());


app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
)

app.listen(port, console.log(`Server running on port ${port}`))
