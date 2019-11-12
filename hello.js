const express=require('express');
const app=express();

//to keep logging details
// const morgan=require('morgan');
const bodyparser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const passport=require('passport');

//port number
const port=process.env.PORT || 3000;

//cors
app.use(cors());

//Bodyparser
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//connected to db
// mongoose.connect("mongodb+srv://dbUser:q9twDpjE06O9oTxd@cluster0-uz0v7.mongodb.net/CarApp?retryWrites=true&w=majority",
// {
//     useUnifiedTopology:true,
//     useNewUrlParser:true,
//     useCreateIndex: true,
// })
// .then(()=>console.log("connected to mongodb"))
// .catch(err => console.log('Error occured while connecting MongoDB '+err));


app.listen(port,()=>{
    console.log("connected on port "+port)
})

app.post('/word',(req,res)=>{
    res.send("Hello...");
    console.log("Hello");
})