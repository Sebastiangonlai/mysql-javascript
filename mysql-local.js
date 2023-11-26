const mysql = require('mysql');

function connect() {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nombre-bd"
    });

    connection.connect((err) => {
        if (err) {
            console.error(err.stack + '\n--------- Error connecting ---------');
            return;
        }
        console.log(connection.threadId + '\n--------- Connected ---------');
    });
    return connection;
}

module.exports = { connect };