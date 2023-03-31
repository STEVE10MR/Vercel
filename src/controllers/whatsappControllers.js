
const fs = require('fs')
const console = require('console');
const { Console } = console;

try {

    const output = fs.createWriteStream('./outputlog.txt');
    const error = fs.createWriteStream('./errlog.txt');
    var logObject = new console.Console(output, error);

}
catch {
    console.error(new Error('Oops, some error.'));
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
        
        
        var entry = (req.body["entry"])[0]
        var changes = (entry["changes"])[0]
        var value = changes["value"]
        var message = value["messages"]
        

        logObject.log(message)
        
        res.send("EVENT_RECEIVED")
        
    }
    catch(e){
        res.send("EVENT_RECEIVED")
    }
}

module.exports = {verifyToken,receivedMessage}