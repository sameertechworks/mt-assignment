const { authJwt } = require("../middleware");
const users = require('../controllers/user.controller.js');

module.exports = function(app) {
 
    // Retrieve all Users
    app.get('/api/users', [authJwt.verifyToken, authJwt.isAdmin], users.findAll);
 
    // Retrieve a single User by Id
    app.get('/api/users/:userId', [authJwt.verifyToken], users.findById);
}