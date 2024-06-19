const express =require("express")
const cors=require("cors")


const app=express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("welcome to our Leafy platfrom")
})

app.listen(5000,console.log("server runing on port 5000"))
