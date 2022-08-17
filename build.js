const fs = require("fs");

const files = fs.readdirSync(__dirname + "/images/");
let data = {};
files.forEach((folder) => {
  data[folder] = fs.readdirSync(__dirname + "/images/" + folder);
});

fs.writeFile(__dirname + "/images.json", JSON.stringify(data), (err) => {
  if (err) throw err;
  else console.log("Json file created");
});
