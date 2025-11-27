const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
    user:'root',
    password:'',
    database:'milkyicedrinkdb'
}); 

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
    console.log('Connected to the database.');
});

module.exports =db();