function all(promise1,promise2){
    var value=[];
     return promise1.then((fulfilled)=>{
           value.push(fulfilled)
           return promise2;
       
    }).then((fulfilled)=>{
           value.push(fulfilled) 
           return Promise.resolve(value);
    })
}

all(getPromise1(), getPromise2())
.then(function (values) {
  console.log(values);
});


