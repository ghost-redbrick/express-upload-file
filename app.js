import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

app.use(express.raw({ limit: "300mb", type: ["*/*"] }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/upload", (req, res) => {
  console.error(req.file, req.body);
  // fs.writeFileSync("storage/test.jpg", req.body);
  console.error("start writing binary to a file");
  fs.writeFile(
    "storage/test.zip",
    req.body,
    {
      encoding: "utf8",
      flag: "w",
      mode: 0o666,
    },
    (err) => {
      if (err) console.error(err);
      else {
        console.error("File written successfully");
      }
    }
  );
  console.error("end call");
  res.send("end call");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
