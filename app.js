const express = require('express');
const app = express();

app.get("/",(req,res) =>{
    console.log(req.query)
    res.sendFile(__dirname + "\\Images\\AI\\tsunade artificial.png")
});
app.listen(3000);