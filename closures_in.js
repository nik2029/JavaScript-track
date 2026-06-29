
//LEXICAL SCOPE

function getName(){
    var name="aditya"
    function accName(){
        console.log(name);
        
    }
    accName();
}
getName();
