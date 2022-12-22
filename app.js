import fs from "fs";
import * as url from "url";
import express from "express";
import fileUpload from "express-fileupload";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const app = express();
const port = 3000;

app.use(fileUpload());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/upload", (req, res) => {
  const fileName = req.files.filename.name;
  req.files.filename.mv(`${__dirname}/storage/${fileName}`, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
  });
  res.send(fileName);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
