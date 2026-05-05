import express from "express";
import "dotenv/config";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

app.get("/users", (req, res) => {
  res.json({
    success: true,
    message: "user created succefully",
    users: users,
  });
});

const users = [
  { id: "1", name: "sinan", email: "sinan@gmail.com" },
  { id: "2", name: "shakil", email: "sinan@gmail.com" },
  { id: "3", name: "sakin", email: "sinan@gmail.com" },
  { id: "4", name: "noyon", email: "sinan@gmail.com" },
];

app.post("/user", (req, res) => {
  const { newUser } = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(201).send({
    success: true,
    message: "user created succefully",
    users: users,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
