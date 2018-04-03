// Examples about callback, promise

console.log("test " + typeof 3);

function getTempCallBack(location, callback){
    callback(undefined, 78);
    callback('Citi not found',35);
    // callback(undefined,35);
    // callback(0,35);    
}

getTempCallBack('Philadenphia', function(err, tempt){
    if(err){
        console.log('error', err);
    }else{
        console.log('success', tempt);
    }
})

function getTempPromise(locaion){
    return new Promise( function(resolve, reject){
        setTimeout(function(){
            reject('CITY NOT FOUND');
            resolve(79); 
        }, 2000)
    });
}


getTempPromise('Ho Chi Minh').then(function(tempt){
    console.log('promise success - ', tempt);
}, function(err){
    console.log('promise error - ', err);
})


function addPromise(a, b){
    return new Promise( function(resolve, reject){
        if(typeof a ===  typeof 1 && typeof b === typeof 1){
            var c = a + b;
            resolve(c);
        }else{
            reject('a and b is not number');
        }
    })
}

addPromise(3,5).then(function(result){
    console.log('Result: ' + result);
}, function(err){
    console.log('Error message:' + err);
});

addPromise(3, "nam").then(function(result){
    console.log('Result: ' + result);
}, function(err){
    console.log('Error message:' + err);
});;
