import express from 'express'

import type {Request, Response} from 'express'
const app = express();
const Port = process.env.PORT || 3000;
app.get('/',(req:Request,res:Response)=>{
    res.send({message:"hello matthew"})
    
})

app.get('/api/hello',(req:Request,res:Response)=>{
    res.send({message:"hello matthew", id:123})
    
})

app.get('/',(req:Request,res:Response)=>{
    res.send({message:"hello matthew"})
    
})

app.listen(Port,()=>{
    console.log(`listening on http://localhost:${Port}`)
})