var promiseCatch = new Promise(function(fulfill,reject){
    reject(new Error('SECRET VALUE'))

}).catch((error)=>{
    console.log(error.message);
})


var promiseReslove = Promise.resolve('SECRET VALUE');
promiseReslove.then(console.log);

var promiseReject = Promise.reject(new Error('SECRET VALUE'));
promiseReject.then(null,onReject);

function onReject(error)
{
    console.log(error.message);
}