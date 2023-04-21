const winston = require('winston')
const fs = require('fs')

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.File({
      filename: 'logs.log',
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
          return `[${timestamp}] ${level}: ${message}\n`;
        })
      )
    })
  ]
})

const processMessage = require("../shared/processMessage")

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
            logger.log('error', e.message)
            res.status(400).send()
        }
}

const receivedMessage = (req,res)=>{
    try{
        let entry = (req.body["entry"])[0]
        let changes = (entry["changes"])[0]
        let value = changes["value"]
        let message = value["messages"][0]

        if(typeof message != "undefined"){
            let textMessage = getTextbyType(message)
            let fromNumber = message["from"]
            let id = message["id"]
            
            if(textMessage != null && fromNumber != null){
                const messageBOT=processMessage.process(textMessage,fromNumber)
                
                const conversation = {
                    date: new Date(),
                    msg: [
                      { sender: 'cliente', message: textMessage },
                      { sender: 'FeedingIA', message: messageBOT }
                    ]
                }
                try {
                    if (fs.existsSync('dataConversations.json')) {
                      let contentFile = fs.readFileSync('dataConversations.json', 'utf8')
                      const conversations = JSON.parse(contentFile)
                      
                      if (conversations[fromNumber]) {
                        conversations[fromNumber].push(conversation)
                      } else {
                        conversations[fromNumber] = [conversation]
                      }
                      
                      fs.writeFileSync('dataConversations.json', JSON.stringify(conversations), 'utf8')
                    } else {
                      const conversations = {}
                      conversations[fromNumber] = [conversation]
                      fs.writeFileSync('dataConversations.json', JSON.stringify(conversations), 'utf8')
                    }
                  } catch (err) {
                    console.error(err)
                }
            }

            logger.log('info',"text: " +textMessage +" from: " + fromNumber)
        }
        res.send("EVENT_RECEIVED")
    }
    catch(e){
        logger.log('error', e.message)
        console.log(e)
        res.send("EVENT_RECEIVED")
    }
}

function getTextbyType(libMessage){
    let text
    switch(libMessage.type){
        case "text":
            text = libMessage.text.body
            break;
        case "interactive":
            var libInteractive = libMessage.interactive
            switch(libInteractive.type){
                case "button_reply":
                    text = libInteractive.button_reply.title
                    break;
                case "list_reply":
                    text = libInteractive.list_reply.title
                    break;
                default:
                    logger.log('error', "Unknown type")
                    break;
            }
            break;
        default:
            logger.log('error', "Unknown type")
            break;
    }
    return text
}



module.exports = {verifyToken,receivedMessage}