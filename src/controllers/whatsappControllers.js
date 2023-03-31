const fs = require("fs")

const console = new console.Console(fs.createWriteStream("./logs.txt"))

const verifyToken = (req,res)=>{
        try{
            let accessToken = "vFgAqJlRmSjOwPzXnEiKcYbHtUyDx"
            const token = req.query["hub.verify_token"]
            let challenge = req.query["hub.challenge"]
            if(challenge != null && token != null && token== accessToken){
                res.send(challenge)
            }
            else{
                res.status(400).send()
            }
        }
        catch(e){
            res.status(400).send()
        }
}

const receivedMessage = (req,res)=>{
    try{
        
        const entry = (req.body["entry"])[0]
        const changes = (entry["changes"])[0]
        const value = changes["value"]
        const message = value["message"]
        
        console.log(message)
        res.send("EVENT_RECEIVED")
        
    }
    catch(e){
        res.send("EVENT_RECEIVED")
    }
}

module.exports = {verifyToken,receivedMessage}