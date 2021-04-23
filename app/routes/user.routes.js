const users = require("../controllers/user.controller");

const {
    checkSignUp
  } = require("../middleware");
  const {
    auth
  } = require("../middleware");

module.exports = (app) => {

    app.use(function (req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
    

    console.log("in router");

    //var router = require("express").Router();

    app.post("/", [
        checkSignUp.checkDuplicateEmail,
        checkSignUp.checkPassword
      ],users.sign_Up);

    app.get("/users/:user_id",users.getUserById)

    //app.use('/api', router);
}