function all(promise1,promise2){
    let value=[];
    let counter=0;
    return new Promise((fulfill,reject)=>{
        promise1.then((res)=>{
            value[0]=res
            counter+=1;
            if(counter==2)
            {
               fullfill(value);
            }
        });
        promise2.then((res)=>{
            value[1]=res
            counter+=1;
            if(counter==2)
            {
               fulfill(value);
            }
        });
    })
}


all(getPromise1(), getPromise2())
    .then(console.log);