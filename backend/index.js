const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
const { createTodo,updateTodo } = require('./types');
const { todo } = require('./db');
app.use(cors());

app.post("/todo", async function(req,res){
     const createPayload = req.body;
     const parsedPayload = createTodo.safeParse(createPayload);
     if(!parsedPayload.success)
     {
         res.status(411).json({message:"Invalid input"});
         return;
     }
     await todo.create({
            title:createPayload.title,
            description:createPayload.description,
            completed:false
        })
     res.json({
            message:"Todo created successfully"
       })
})

app.get("/todos",async function(req,res){
    const todos = await todo.find({});
    res.json({todos});
})

app.put("/completed",async function(req,res){
    const completedPayload = req.body;
    const parsedCompletedPayload = updateTodo.safeParse(completedPayload);
    if(!parsedCompletedPayload.success)
    {
        res.status(411).json({message:"Invalid input"});
        return;
    }
    await todo.updateOne({
        _id:req.body.id
    },
        {
            completed:true
        })
    res.json({message:"Todo updated successfully"})
})


app.listen(3000, function(){
    console.log("Server is running on port 3000");
})