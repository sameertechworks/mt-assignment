const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const { initial } = require('./app/db/seed');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-docs/swagger.json');

const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync Db');
    initial();
});

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Application running successfully" });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
require('./app/routes/auth.routes.js')(app);
require('./app/routes/user.routes.js')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});