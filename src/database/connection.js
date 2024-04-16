const connection = require("knex")({
    client: "mysql",
    connection: {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "api"
    }
});

module.exports = connection;