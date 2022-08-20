const fs = require("fs");
const IMAGES = JSON.parse(fs.readFileSync("images.json"));

fs.readFile("README.md", function read(err, data) {
  if (err) {
    throw err;
  }
  const file_content = data.toString();
  var str = `Name | Len folder | Example \n --- | :---: | :---:  \n`;
  Object.keys(IMAGES).forEach((key) => {
    let folder = IMAGES[key];
    str += "| `" + key + "`|" + `${folder.length}| <img src="./Images/${key}/${folder[Math.floor(folder.length * Math.random())]}"  width="160"> \n` 
  });

  const idx = file_content.indexOf("## Current Folders") + "## Current Folders".length;
  const result = file_content.slice(0, idx) + "\n" + str + file_content.slice(idx);
  fs.writeFile(__dirname + "/README.md", result, (err) => {
    if (err) throw err;
    else console.log("images.json create");
  });
});
