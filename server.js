import express from "express";
import logger from "morgan";

const app = express();


app.get('/', (req, res) => {
  res.send('Hello There!');
});

app.listen(3000);