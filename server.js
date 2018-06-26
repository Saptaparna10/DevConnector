const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();
//DB config
const db = require("./config/keys").mongoURI;

//connect to mongo db
mongoose
  .connect(db)
  .then(() => console.log(`connected!!`))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello world"));

// Use routes
app.use("/api/user", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
