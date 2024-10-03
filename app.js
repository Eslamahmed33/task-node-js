const express=require('express')
const app=express()
const port=9093

app.get('/',(req,res)=>{
res.send('eslam ahmed')
})

app.listen(port,()=>{
    console.log(`start ${port}`)
})