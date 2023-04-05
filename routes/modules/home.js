const express = require("express");
const router = express.Router();
const Users = require("../../models/users");

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", (req, res) => {
  const { email, password } = req.body;
  Users.findOne({ email, password })
    .then((user) => {
      if (user) {
        res.render("index", { firstName: user.firstName });
      } else {
        const errorMessage = `Wrong email or password, please try again.`;
        res.render("login", { errorMessage });
      }
    })
    .catch((e) => console.log(e));
});

module.exports = router;
