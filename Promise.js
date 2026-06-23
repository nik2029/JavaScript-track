
// Promise....

const promise= new Promise((success,reject)=>{
    setTimeout(()=>{
        success("data not recived");
    },2000);

});

promise.then(data=>{
    console.log(data);
});

//find result multistate operation
Promise.resolve(10)
.then(num=>{
    return num *2;
})
.then(num=>{
    return num +5;
})
.then(num=>{
    return num/2;
})
.then(result=>{
    console.log(result);
    
});

//pass response in single way

Promise.resolve(50)
.then(result=>{
    console.log(result);
    
})

// adding states and passing new promise inside promise 

Promise.resolve(52)
.then(num=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(num*2);
        },3000);
    })
})
.then(result=>{
    console.log(result);
    
});

//print error if promise get rejected

Promise.reject("network error")
.catch(error=>{
    console.log(error);
    
})


//show error using throw keywords

Promise.resolve()
.then(()=>{
     throw new Error("oops data is not there");
})
.catch(err=>{
    console.log(err.message);
    
})
// Promise using finally

Promise.reject("error with thhis program")
.finally(()=>{
    console.log("this is finally block that will always run");
    
})
.catch(error=>{
    console.log(error);
    

});
