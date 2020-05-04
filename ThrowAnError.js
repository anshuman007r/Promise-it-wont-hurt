const process=require('process');

function parsePromised(value){
     try{
         const resolveRequest=JSON.parse(value);
         return Promise.resolve(resolveRequest)
     }catch(error){
         return Promise.reject(new Error(error.message))
     }
}

parsePromised(process.argv[2])
.then(console.log)
.then(null,onReject);

function onReject(error){
    console.log(error.message);
}