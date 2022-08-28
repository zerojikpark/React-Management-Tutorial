    const fs = require('fs');   //file에 접근 라이브러리

    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();
    const  port = process.env.Port || 5000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extends: true}));

    const data = fs.readFileSync('./database.json');
    const conf = JSON.parse(data);
    const mysql = require('mysql2');

    const connection = mysql.createConnection({
        host: conf.host,
        user: conf.user,
        password: conf.password,
        port: conf.port,
        database: conf.database
    });

    connection.connect();

    app.get('/api/customers', (req, res) => {
        connection.query(
          "SELECT * FROM CUSTOMER",
            (err, rows, fields) => {
              res.send(rows);
            }
        );
    });

    app.listen(port, () => console.log(`Listening on port ${port}`));