const mongoose = require("mongoose");

const Company = mongoose.model(
    "Company",
    new mongoose.Schema({
        name: String,
        desc: String,
        userId: String
    })
);

module.exports = Company;