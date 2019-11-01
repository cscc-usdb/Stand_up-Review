var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'cscc_apps'
});

connection.connect();

connection.query('select * from cscc_apps.reviews', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', JSON.stringify(results));
});