const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/auth/login", (req, res) => {
  console.log(req.body);

  res.json({
    message: "Backend received data",
  });
});

app.listen(5000, () => {
  console.log("Server running");
});