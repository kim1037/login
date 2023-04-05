//載入相關模組
const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = 3000;

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
//設定樣板引擎
app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(routes);

//監聽伺服器
app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
