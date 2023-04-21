const https = require('https')
function SendMessageText(data) {
    const options = {
        host : "graph.facebook.com",
        path : "/v16.0/108584732197107/messages",
        method : "POST",
        body : data,
        headers : {
            "Content-Type" : "application/json",
            Authorization : "Bearer EAALFJ2ZA604MBAMgAL42LZAOeRzhsskFoCn5xfSyFz4J5ElhDPjvcIS6inrZC2muvZAMkNBjvMe3RHXjDyvDbKkzUum3kFtZABZAoP66tGaUqzZC97q6uWnn1iboKsJCekrV00JCpaaxjBuuJPBXXZCe1HaGVmyiUa98b0lhgbb7eidnQ7ADFvhR",
        }
    }
    const req = https.request(options,res=>{
        res.on("data",d=>{
            process.stdout.write(d)
        })
    })
    req.on("ERROR",error=>{
        console.log("error")
    })
    req.write(data)
    req.end()
}

module.exports = {SendMessageText}