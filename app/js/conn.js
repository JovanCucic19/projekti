var mysql = require("mysql");

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'drustvena'
});


con.query('SELECT * FROM korisnici', function (err, rows) {
    if (err) throw err;

    console.log('Data received from Db:\n');
    console.log(rows);
});

con.end(function (err) {
    if (err != undefined) {
        console.log(err);
    }
});
