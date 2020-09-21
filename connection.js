const mysql = require('mysql');


const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'cars'
});

connection.connect((err) => {
   if (err) {
       return console.error('error:'+ err.message);
   }

   console.log('Connected to the MySql Server');

});

connection.end((err) => {
    if (err) {
        return console.log('error:' + err.message);
    }

    console.log('Close the database connection.');
});