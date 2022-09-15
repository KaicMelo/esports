import express from "express";

const app = express();

app.get('/ads',(req, res)=> {
    console.log('hello')

})

app.listen(3333)