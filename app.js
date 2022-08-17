const express = require("express");
const app = express();
const fs = require("fs");
const ImagesNames = JSON.parse(fs.readFileSync("images.json"));

const randomImg = (path) => {
  const keys = Object.keys(ImagesNames);
  const folder = path || keys[Math.floor(keys.length * Math.random())];
  const listfolder = ImagesNames[folder];
  return `${folder}\\${
    listfolder[Math.floor(Math.random() * listfolder.length)]
  }`;
};
app.get("/", (req, res) => {
  console.log(req.query);
  res.sendFile(__dirname + "\\Images\\" + randomImg(req.query.filter));
});

app.listen(3000);
