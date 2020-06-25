const mongoose = require("mongoose");

const Task = mongoose.model(
    "Task",
    new mongoose.Schema({
        userId: String,
        companyId: String,
        defect: [
            {
                title: String,
                desc: String,
                photo: String
            }
        ]
    })
);

module.exports = Task;