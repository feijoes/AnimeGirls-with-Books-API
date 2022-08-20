const express = require("express");
const app = express();
const fs = require("fs");
const ImagesNames = JSON.parse(fs.readFileSync("images.json"));
const favicon = require("serve-favicon");
app.use(favicon(__dirname + "/Vigne_holds_Concepts_of_Programming_Languages_by_Sebesta.ico"));

app.get("/", (req, res) => {
  data = { CurrentIMGS: {} };

  Object.keys(ImagesNames).map((key) => {
    data.CurrentIMGS[key] = ImagesNames[key].length;
  });
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data, null, 4));
});

const randomImg = (path) => {
  const keys = Object.keys(ImagesNames);
  const folder = path || keys[Math.floor(keys.length * Math.random())];
  const listfolder = ImagesNames[folder];
  return `${folder}\\${
    listfolder[Math.floor(Math.random() * listfolder.length)]
  }`;
};
app.get("/api", (req, res) => {
  console.log(req.query);
  res.sendFile(__dirname + "\\Images\\" + randomImg(req.query.filter));
});

app.listen(3000);
