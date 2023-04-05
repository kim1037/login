//載入相關模組
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const PORT = 3000;

//設定樣板引擎
app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
//導入路由
app.get("/", (req, res) => {
  res.render("index");
});

//監聽伺服器
app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
