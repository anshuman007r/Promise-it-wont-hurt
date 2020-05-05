const readFromHTTP = require("q-io/http")


readFromHTTP.read('http://localhost:7000')
.then((res)=>{
    return res.toString()
}).then((res)=>{
    readFromHTTP.read(`http://localhost:7001/${res}`)
    .then((res)=>{
        return JSON.parse(res)
    }).then(console.log);
});