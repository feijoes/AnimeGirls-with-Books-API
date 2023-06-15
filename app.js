const express = require('express');
const app = express();
const fs = require('fs');
const sharp = require('sharp');
const ImagesNames = JSON.parse(fs.readFileSync('images.json'));
const favicon = require('serve-favicon');

app.use(
  favicon(
    __dirname + '/Vigne_holds_Concepts_of_Programming_Languages_by_Sebesta.ico'
  )
);

app.get('/', (_, res) => {
  data = { CurrentIMGS: {} };

  Object.keys(ImagesNames).map(key => {
    data.CurrentIMGS[key] = ImagesNames[key].length;
  });
  res.header('Content-Type', 'application/json');
  res.send(JSON.stringify(data, null, 4));
});

const randomImg = path => {
  const keys = Object.keys(ImagesNames);
  const folder =
    path !== undefined
      ? path.split(',')[Math.floor(path.split(',').length * Math.random())]
      : keys[Math.floor(keys.length * Math.random())];
  const listfolder = ImagesNames[folder];
  return [
    `${folder}`,
    `${listfolder[Math.floor(Math.random() * listfolder.length)]}`
  ];
};

const resizeImg = (width, y, file, res) => {
  sharp(`${__dirname}\\Images\\${file[0]}\\${file[1]}`)
    .resize(width, y)
    .png()
    .toBuffer()
    .then(data => res.type('png').send(data));
};
app.get('/api', (req, res) => {
  try {
    const query = req.query;
    const file = randomImg(query.filter);

    if (req.query.size)
      return resizeImg(
        parseInt(query.size.split(',')[0]),
        parseInt(query.size.split(',')[1]),
        file,
        res
      );

    return res.sendFile(`${__dirname}\\Images\\${file[0]}\\${file[1]}`);
  } catch (E) {
    console.log(E);
    res.json({ ERROR: 'Wrong request' , Msg : E });
  }
});

app.listen(3000);
