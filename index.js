const express = require('express')
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express()

// if you update the port make sure to update the frontend fetch fetch point
const port = 3000

const { createWorkTable, closeConnection, addVote } =require('./Database/databaseClient')

app.use(cors())

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

createWorkTable()

app.post('/vote',async (req, res) => {
    await addVote(req.body.bestDesignStand, req.body.bestPresentationStand, req.body.message, res)
})

// closeConnection()
app.listen(port, () => {
    console.log(`App Running on PORT - ${port}`)
})