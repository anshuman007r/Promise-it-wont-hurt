const readFromHTTP =require('q-io/http');

readFromHTTP.read('http://localhost:1337')
.then((value)=>{
    return JSON.parse(value);
}).then(console.log);
