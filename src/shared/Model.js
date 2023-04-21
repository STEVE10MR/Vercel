
class MessageType {
    static typeText(number,resText) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "text",
            "text": {
                "preview_url": false,
                "body": resText
            }
        })
        return data
    }
    static typeTextWelcome(number, responseText) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "text",
            "text": {
              "type": "media",
              "media": "https://www.laglorietarestaurant.com/uploads/galeria/charito-mistral-031219085047.jpg",
              "caption": "",
              "preview_url": false,
              "body": responseText
            }
          });
        
        return data;
    }
    static typeImage(number,urlImage) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": number,
            "type":"image",
            "image": {
                "link": urlImage
            }
        })
        return data
    }
    static typeButton(number) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "body": {
                    "text": "*Confirmas tu Pedido*"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "001",
                                "title": "Si"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "002",
                                "title": "No"
                            }
                        }
                    ]
                }
            }
        })
        return data
    }
    static typeLocation(number,lat,lon,name) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": number,
            "type":"location",
            "location": {
                "latitude": lat,
                "longitude": lon,
                "name": name,
                "address": "Test"
            }
        })
        return data
    }
    static typeUrl(number,text,url) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": number,
            "text": {
                "preview_url": true,
                "body": text+" : "+url
            }
        })
        return data
    }
    static typeDocument(number,url,text) {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": number,
            "type":"document",
            "document": {
                "link": url,
                "caption":text
            }
        })
        return data
    }
}

module.exports = {MessageType}