const Task = require("../models/task.model");

exports.addTask2 = (req, res) => {
    res.status(200).send("Add Task.");
};

exports.addTask = (req, res) => {
    const task = new Task({
        userId: req.body.userId,
        companyId: req.body.companyId,
        defect: req.body.defect
    });

    if (req.body.userId && req.body.defect && req.body.companyId) {
        task.save((err, task) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.status(200).send({ message: "Task Created!" });
        });
    }
    else {
        res.status(500).send({ message: "Not be null paramteres!" });
    }
};

exports.getTask = (req, res) => {
    Task.find().populate("tasks", "-__v")
        .exec((err, task) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!task) {
                return res.status(404).send({ message: "Task Not found." });
            }
            res.status(200).send({
                task
            });
        });
};

exports.getTaskId = (req, res) => {
    Task.findOne({userId:req.body.userId}).populate("tasks", "-__v")
        .exec((err, task) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!task) {
                return res.status(404).send({ message: "Task Not found." });
            }
            res.status(200).send({
                task
            });
        });
};