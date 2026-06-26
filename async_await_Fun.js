const p1=new Promise(function(resolve,reject){
    setTimeout(()=>
        resolve("this is showing promise resolve in P1"),5000

    );
});

const p2= new Promise(function(resolve,reject){
    setTimeout(()=>
    resolve("this is showing the p2 is resolve"),10000);
});

const p3=new Promise(function(resolve,reject){
    setTimeout(()=>
    resolve("this is showing p3 is resolve"),5000)
}
)

// way of normal function to getData

// function getData(){
//     p.then((res)=>console.log(res)
//     );
// }
//getData();


// Using Async/await function

async function getData() {
    // this log will excuted firstly
    console.log("this is async function");
    //promise p1 is resolve in 5 sec
    const data1=await p1;
    console.log(data1);

    //promise p2 is resolve 10 sec
     const data2=await p2;
    console.log(data2);

    // promise p3 resolve in 5 sec
     const data3=await p3;
    console.log(data3);
}
getData();

