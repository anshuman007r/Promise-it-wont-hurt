var promise=new Promise(function(fulfill,reject){
    fulfill('PROMISE VALUE');
})
promise.then(function(onFulfilled,onRejection){
    console.log(onFulfilled);
})
console.log('MAIN PROGRAM');