
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


// printing orderid using promise

// const cart=["t-shirt","pant's","shirt"];
// const promise=createOrder(cart);
// promise.then(function(orderId){
//     console.log(orderId);
    
// });

// function createOrder(cart){
//     const pr=new Promise(function(success,reject){
//         if(!orderValidate){
//             const err=new Error("cart is not valid");
//             reject(err);
//         }
//          orderId=12356;
//         if(orderId){
//             setTimeout(() => {
//                 success(orderId);
//             }, 3000);
//         }
    
//     });
//     return pr;
// }
// function orderValidate(cart){
//     return true;
// }


// write promiise for create order/proceedtopay/showOrder summary/show wallet balance
const cart=["apple","banana","mango"];
const orderId=1563;
createOrder(cart)
.then(function(orderId){
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
    return proceedToPay(orderId);
})
.then(function(payentdetial){
    console.log(payentdetial);
    
})
.then(function(orderId){
    return showOrderSummary(orderId);
})
.then(function(showSummary){
    console.log(showSummary);
    
})
.then(function(wallet){
    return updateWallet(wallet);
})
.then(function(showWallet){
    console.log(showWallet);
    
})
.catch(function(err){
    console.log(err.message);
    
})






function createOrder(cart){
    return new Promise(function(resolve,reject){
        resolve(orderId+" "+"order created");
    })
}

function proceedToPay(orderId){
    return new Promise(function(resolve,reject){
        resolve(orderId+" "+" proceed to payment");
    })
}
function showOrderSummary(orderId){
    return new Promise(function(resolve,reject){
        resolve(orderId+" "+"this is your order summary");
    })
}
let wallet=2456;
function updateWallet(){
    return new Promise(function(resolve,reject){
        resolve("your balance is :"+wallet);
    })
}