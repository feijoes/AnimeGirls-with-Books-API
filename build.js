const fs = require('fs');

const files = fs.readdirSync(__dirname + '/Images/');
let data = {};
files.forEach(folder => {
  if (!folder.endsWith('.md'))
    data[folder] = fs.readdirSync(__dirname + '/Images/' + folder);
});

fs.writeFile(__dirname + '/images.json', JSON.stringify(data), err => {
  if (err) throw err;
  else console.log('UPDATE JSON');
});
