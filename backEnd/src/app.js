const express = require('express');
const { deserialize } = require('mongodb');
const app = express();

var data = [{
    firstName :"Harsh Raj",
    lastName:"Raj",
    designation:"Jr Software Dev"
},
{
    firstName:"John",
    lastName:"Ciena",
    designation:"Wrestler"
}
]

app.get("/user/:id/:name/:add",(req,res)=>{
    console.log(req.params);
    res.send("Got it");
})

//-> Checked multiple handlers in same api
app.get("/profile",
    (req,res,next)=>{
        next();
        //res.send("Data send successfully!");
    },
    (req,res)=>{
        console.log("Entered second handler");
        res.send("This is second one");
    }
)
//Using Regular Expressions
app.get("/pro*file",(req,res)=>{
    res.send(data)
})

app.post("/profile",(req,res)=>{
    console.log(req);
    data[0].firstName = req.query.firstName,
    data[0].lastName = req.query.lastName,
    data[0].designation = req.query.designation
    res.send("Data updated successfully");
})

app.put("/profile",(req,res)=>{
    data[0].designation = req.query.designation
    res.send("Data upadated Successfully");
})

app.delete("/profile",(req,res)=>{
    data.shift();
    res.send("Data deleted successfully");
})
app.use("/testUrl",(req,res)=>{
    res.send("Just testing my knowledge");
})

app.listen(3000,()=>{
    console.timeLog("Server started at port 3000");
})