function iterate(value){
    console.log(value);
    return value+1
}

function alwaysThrows(){
    return 'OH NOES';
}

Promise.resolve(iterate(1))
.then(function(onFulFilled,onRejected){
    return Promise.resolve(iterate(onFulFilled))
}).then(function(onFulFilled,onRejected){
    return Promise.resolve(iterate(onFulFilled))
}).then(function(onFulFilled,onRejected){
    return Promise.resolve(iterate(onFulFilled))
}).then(function(onFulFilled,onRejected){
    return Promise.resolve(iterate(onFulFilled))
}).then(function(onFulFilled,onRejected){
    return Promise.reject(new Error(alwaysThrows()))
}).then(function(onFulFilled,onRejected){
    return Promise.resolve(iterate(onFulFilled))
}).then(function(onFulFilled,onRejected){
    return Promise.resolve(iterate(onFulFilled))
}).then(function(onFulFilled,onRejected){
    return Promise.resolve(iterate(onFulFilled))
}).then(function(onFulFilled,onRejected){
    return Promise.resolve(iterate(onFulFilled))
}).then(function(onFulFilled,onRejected){
    return Promise.resolve(iterate(onFulFilled))
}).then(null,onRejected);

function onRejected(error){
    console.log(error.message);
}
