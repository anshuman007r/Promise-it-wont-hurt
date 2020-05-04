const val=first();

val.then(function(onfulfilled,onRejected){
    return second(onfulfilled);
}).then(function(onfulfilled,onRejected){
    console.log(onfulfilled)
})
