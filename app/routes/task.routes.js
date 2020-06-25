const { authJwt } = require("../middlewares");
const controller = require("../controllers/task.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/task/get", [authJwt.verifyToken], controller.getTask);
    app.get("/api/task/getId", [authJwt.verifyToken], controller.getTaskId);
    app.post("/api/task/add", [authJwt.verifyToken], controller.addTask);
};