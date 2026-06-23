const users = [
  { firstName: "Rahul", lastName: "Sharma", age: 25 },
  { firstName: "Amit", lastName: "Kumar", age: 17 },
  { firstName: "Priya", lastName: "Singh", age: 30 },
  { firstName: "Neha", lastName: "Verma", age: 22 },
  { firstName: "Rohit", lastName: "Gupta", age: 25 },
  { firstName: "Anjali", lastName: "Yadav", age: 28 },
  { firstName: "Vikas", lastName: "Mishra", age: 35 },
  { firstName: "Sneha", lastName: "Patel", age: 29 },
  { firstName: "Karan", lastName: "Joshi", age: 40 },
  { firstName: "Pooja", lastName: "Agarwal", age: 27 }
];
// find firstName and lastName together using Map

const fullName=users.map((x)=>x.firstName+" "+x.lastName);
console.log(fullName);
// Output: ['Rahul Sharma', 'Amit Kumar', 'Priya Singh', '
// Neha Verma', 'Rohit Gupta', 'Anjali Yadav', '
// Vikas Mishra', 'Sneha Patel', 'Karan Joshi', '
// Pooja Agarwal']

// find how many people  with same age

const sameAge=users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]= ++acc[curr.age]

    }else{
        acc[curr.age]=1;
    }
    return acc;
},{})
console.log(sameAge);

//output: 
//{15: 1, 17: 1, 19: 1, 22: 1, 25: 1, 
// 27: 1, 28: 1, 30: 1, 35: 1, 40: 1}


//Find the first name of those people age is >35

const fName=users.filter(x=>x.age<35).map((x)=>x.firstName);
console.log(fName);
