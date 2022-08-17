const express = require('express');
const app = express();



const randomImg = (path = '/images/')=>{
    
    
    console.log(files)
    console.log(files[Math.floor(Math.random() * files.length)] )
    return 
}

app.get("/",(req,res) =>{
    console.log(req.query)
    randomImg()
    res.sendFile(__dirname + "\\Images\\AI\\tsunade artificial.png")
});


app.listen(3000);