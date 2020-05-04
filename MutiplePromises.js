function all(promise1,promise2){
    var counter=0
    var value=[];
     returnpromise1.then((fulfilled)=>{
        if (fulfilled)
        {
           value.push(handler(counter))
           return promise2;
        }
    }).then((fulfilled)=>{
        if (fulfilled)
        {
           value.push(handler(value[0])) 
           return Promise.resolve(value);
        }
    })

}

all(promise(1), promise(2))
.then(function (values) {
  console.log(values[0], values[1]);
});

function promise(value){
    return Promise.resolve(value)
}

function handler(value){
    return value+1
}

