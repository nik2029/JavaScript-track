const USER_API="https://dummyjson.com/users";
async function getData(){
    const response= await fetch(USER_API);
    const user = await response.json();
    console.log(user);


    user.users.forEach(showall => {
        console.log(showall.firstName+" "+ showall.age+" "+showall.email);
        console.log(showall.bank.cardNumber);
        console.log(showall.address);
        console.log(showall.company);
        console.log(showall.crypto);
        
        
        
    });

    const fullName=user.users.map(x=>x.id+": " +x.firstName+" "+x.lastName);

    console.log(fullName);

    const bnkDetial= user.users.map(b=>b.bank);
    console.log(bnkDetial);
    
    const findLess=user.users.filter(a=>a.age<40).map(x=>x.firstName+ "his age is :"+x.age);
    console.log(findLess);
    
}
getData()
