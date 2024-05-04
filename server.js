import pkg from "express";
import { exec } from "child_process";
const express = pkg;
const app = express();
const PORT = process.env.PORT;
// const update = exec("sh update.sh", (error, stdout, stderr) => {
//   console.log(stdout);
//   console.log(stderr);
//   if (error !== null) {
//     console.log(`exec error: ${error}`);
//   }
// });

app.get("/", (req, res) => {
  console.log(res);
});

app.listen(5000, () => console.log(`server is running on port ${PORT}`));
