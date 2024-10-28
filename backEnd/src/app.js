const express = require('express');

const app = express();


app.use("/check",(req,res)=>{
    res.send("Hello there");
});

app.use("/test",(req,res)=>{
    res.send("Homework cheking test");
})
app.use((req,res)=>{
    res.send("Dude i am listening now");
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})