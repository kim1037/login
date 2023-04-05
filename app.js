//載入相關模組
const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const Users = require("./models/users");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

//connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

//連線異常
db.on("error", () => {
  console.log("mongodb error!");
});

db.once("open", () => {
  console.log("MongoDB connect success!");
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//設定樣板引擎
app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

//導入路由
app.get("/", (req, res) => {
  res.render("login");
});

app.post("/", (req, res) => {
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

//監聽伺服器
app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
