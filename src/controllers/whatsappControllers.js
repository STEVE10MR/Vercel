const verifyToken = (req,res)=>{

    try{
        let accessToken = "vFgAqJlRmSjOwPzXnEiKcYbHtUyDx"
        const token = req.query["hub.verify_token"]
        let challenge = req.body["hub.challenge"]

        if(challenge != null && token != null && token== accessToken){
            res.send(challenges)
        }
        else{
            res.status(400).send()
        }
    }
    catch(err){
        res.status(400).send()
    }
}
const receivedMessage = (req,res)=>{
    res.send("Hola receivedMessage")}

module.exports = {verifyToken,receivedMessage}