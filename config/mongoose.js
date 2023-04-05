const mongoose = require("mongoose");


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

module.exports = db