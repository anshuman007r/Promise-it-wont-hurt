
var promiseVariable = new Promise(function (fulfill, reject) {
        setTimeout(()=>{fulfill('FULFILLED!')},300)
  });

promiseVariable.then(function(onFulfilled,onRejected){
    console.log(onFulfilled);
});