const express = require('express')
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express()



app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
var mysql = require("mysql");
var config = require("./Database/dbConfig.json");

var connection = mysql.createConnection({
    host: config.dbhost,
    user: config.dbuser,
    password: config.dbpassword,
    database: config.dbname
});

connection.connect();
app.get('/add/:best_design_stand/:best_presentation_stand/:message', (req, res) => {

    connection.query(`INSERT INTO reviews (best_design_stand,best_presentation_stand,message) VALUES (?,?,?)`,
        [req.params.best_design_stand, req.params.best_presentation_stand, req.params.message], function (error, results, fields) {
            if (error) { throw error; connection.release(); }
            res.send({ status: 200, message: "message submite" })
        });

})

app.listen(3000)