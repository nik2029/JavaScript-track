//  simple function
function x(){
    console.log("Simple Function");
}

x();

// function expression
const fFun=function y(){
    let a=55;
    let b=15;
    let sum = a+b;
    console.log(sum);
    
}
fFun();

// Constructor function
function Counter(){
    let count=0;
    this.incrementCount=function(){
        count++;
        console.log(count);
        
    }
    this.decrementCount=function(){
        count--;
        console.log(count);
        
    }
}

let counter= new Counter();
counter.incrementCount();
counter.decrementCount();