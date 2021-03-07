const express = require('express')
const bodyParser = require("body-parser");
const open = require('opn');
const cors = require('cors');
const app = express();


// if you update the port make sure to update the frontend fetch fetch point
const port = 3000

const { createWorkTable, closeConnection, addVote } =require('./Database/databaseClient')

app.use(cors())

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static('public'))
createWorkTable()

app.post('/vote',async (req, res) => {
    await addVote(req.body.bestDesignStand, req.body.bestPresentationStand, req.body.message, res)
})

// closeConnection()
app.listen(port, () => {
    const linkToApp = `http://localhost:${port}`
    console.log(`Running on PORT - ${port}
    App on - ${linkToApp}
    `)
    open(linkToApp);
})