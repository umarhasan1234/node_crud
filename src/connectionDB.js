const mysql = require("mysql2");

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'virus@123',
    database: 'vpt_employee_node'
});

mysqlConnection.connect((err) => {
    if (err) {
        console.log("Error in Db connection: ");
    } else {
        console.log("Db connected successfully");
    }
});

// SQL query to create a table
const createTableQuery = `CREATE TABLE IF NOT EXISTS users (
                                 id INT AUTO_INCREMENT PRIMARY KEY,
                                username VARCHAR(255) NOT NULL,
                                 email VARCHAR(255) NOT NULL,
                                    password VARCHAR(12))`;

// Execute the query to create the table
mysqlConnection.query(createTableQuery, (error, results, fields) => {
if (error) {
  console.error('Error creating table: ', error);
  throw error;
}

console.log('Table created successfully');

// Close the connection
mysqlConnection.end();
});


module.exports = mysqlConnection;
