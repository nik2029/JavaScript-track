const p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("this will excute in 2 sec")
    },2000);
});

const p2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("this will excute in 4 sec")
    },4000);
});


//race()

Promise.race([p1,p2])
.then((values)=>{
    console.log(values);
    
});

//all()

Promise.all([p1,p2])
.then((values)=>{
    console.log(values);
    
});

//any()

Promise.any([p1,p2])
.then((values)=>{
    console.log(values);
    
});

// allSettles()

Promise.allSettled([p1,p2])
.then((values)=>{
    values.forEach((value)=>console.log(value));
    
    
});