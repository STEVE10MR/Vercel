

try {
    const fs = require('fs')
    const console = require('console')
    const { Console } = console
    const output = fs.createWriteStream('./outputlog.txt');
    const error = fs.createWriteStream('./errorlog.txt');
    var objLogger   = new Console(output)
    var objError   = new Console(error)
    

}
catch {
    console.error(new Error('Oops, some error.'))
}

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
        
        
        var entry = (req?.body["entry"])[0]
        var changes = (entry["changes"])[0]
        var value = changes["value"]
        var message = value["messages"]
        
        objLogger.log(req.body["entry"])

        
        
        res.send("EVENT_RECEIVED")
        
    }
    catch(e){
        objError.log("Error: " + e.message)
        res.send("EVENT_RECEIVED")
    }
}

module.exports = {verifyToken,receivedMessage}