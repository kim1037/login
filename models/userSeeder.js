const users = [
  {
    firstName: "Tony",
    email: "tony@stark.com",
    password: "iamironman",
  },
  {
    firstName: "Steve",
    email: "captain@hotmail.com",
    password: "icandothisallday",
  },
  {
    firstName: "Peter",
    email: "peter@parker.com",
    password: "enajyram",
  },
  {
    firstName: "Natasha",
    email: "natasha@gamil.com",
    password: "*parol#@$!",
  },
  {
    firstName: "Nick",
    email: "nick@shield.com",
    password: "password",
  },
];

const Users = require("./users");
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
  Users.create(users)
    .then(() => console.log("done"))
    .catch((e) => console.log(e));
});
