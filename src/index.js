const express = require("express")
const apiRoute = require("./routes/routes")
const app=express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use("/test",apiRoute)
app.listen(PORT,()=>{console.log("el puerto es : "+PORT)})