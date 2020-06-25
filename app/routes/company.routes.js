const { authJwt } = require("../middlewares");
const controller = require("../controllers/company.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/company/get", [authJwt.verifyToken], controller.getCompany);
    app.get("/api/company/getId", [authJwt.verifyToken], controller.getCompanyId);
    app.post("/api/company/add", [authJwt.verifyToken], controller.addCompany);
};