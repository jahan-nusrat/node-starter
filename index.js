const express = require('express')

const app = express()

//const rootCall=(req,res)=>res.send('Thank you')

app.get("/", (req, res) => res.send("Learning node"))

app.listen(3000, () => console.log("Node is listening"))