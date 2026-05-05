const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const users = [
  { id: "1", name: "sinan", email: "sinan@gmail.com" },
  { id: "2", name: "shakil", email: "sinan@gmail.com" },
  { id: "3", name: "sakin", email: "sinan@gmail.com" },
  { id: "4", name: "noyon", email: "sinan@gmail.com" },
];

app.post("/user", (req, res) => {
  res.json({
    success: true,
    message: "user created succefully",
    users: users,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
