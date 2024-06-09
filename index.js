import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/sum", (req, res) => {
  const { a, b } = req.query;
  const sum = parseInt(a) + parseInt(b);
  res.status(200).send(`Sum: ${sum}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
