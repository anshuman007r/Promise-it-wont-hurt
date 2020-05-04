function attachTitle(value){
    return 'DR. '+value
}

var promise = new Promise(function(fulfill,reject){
    fulfill('MANHATTAN');
}).then(attachTitle)
.then(console.log)





