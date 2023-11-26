const mysql = require('mysql');

function connect() {
    const connection = mysql.createConnection({
        host: 'dominio.com.uy',
        user: 'user-remoto',
        password: 'pass-remoto',
        database: 'bd-remota'
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