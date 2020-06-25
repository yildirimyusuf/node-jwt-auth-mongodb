const db = require("../models");
const Company = db.company;

exports.addCompany = (req, res) => {
    const company = new Company({
        userId: req.body.userId,
        name: req.body.name,
        desc: req.body.desc
    });
    if (req.body.name) {
        company.save((err, company) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.status(200).send({ message: "Company was registered successfully!" });
        });
    }
    else {
        res.status(500).send({ message: "Company name is not be null!" });
    }
};

exports.getCompany = (req, res) => {
    Company.find().populate("companies", "-__v")
        .exec((err, company) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!company) {
                return res.status(404).send({ message: "Company Not found." });
            }
            res.status(200).send({
                company
            });
        });
};

exports.getCompanyId = (req, res) => {
    Company.findOne({ userId: req.body.userId })
    .populate("companies", "-__v")
        .exec((err, company) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!company) {
                return res.status(404).send({ message: "Company Not found." });
            }
            res.status(200).send({
                company
            });
        });
};