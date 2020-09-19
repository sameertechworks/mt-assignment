const db = require("../models");
const User = db.users;

exports.initial = () => {
    User.create({
        id: 1,
        name: "James",
        email: "James@123.com",
        password: "1!23#4",
        role: "Employee"
    });

    User.create({
        id: 2,
        name: "Peter",
        email: "Peter@123.com",
        password: "8^23!3",
        role: "Employee"
    });

    User.create({
        id: 3,
        name: "John",
        email: "John@123.com",
        password: "98!891",
        role: "Admin"
    });

    User.create({
        id: 4,
        name: "Fred",
        email: "Fred@123.com",
        password: "68651",
        role: "Admin"
    });
}