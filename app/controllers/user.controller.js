const db = require("../models");
const User = db.users;

// Fetch all Users
exports.findAll = (req, res) => {
    User.findAll({
        attributes: { exclude: ["password", "createdAt", "updatedAt"] }
    }).then(users => {
        let sorted = this.sortFunction(users)
        
        res.json(sorted);
    }).catch(error => res.status(400).send(error))
};

// Find a User by Id
exports.findById = (req, res) => {
    User.findByPk(req.params.userId,
        { attributes: { exclude: ["password", "createdAt", "updatedAt"] } }
    ).then(user => {
        if (!user) {
            return res.status(404).json({ message: "User Not Found" })
        }
        return res.status(200).json(user)
    }).catch(error => res.status(400).send(error));
};

exports.sortFunction = (users) => {
    let sorted = users.sort(function IHaveAName(a, b) {
        return b.name < a.name ?  1
             : b.name > a.name ? -1
             : 0;
    });

    return sorted;
}