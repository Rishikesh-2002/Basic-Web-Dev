let a=prompt("Enter first No")

let b=prompt("Enter second No")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Please enter valid input");
}
let sum=parseInt(a)+parseInt(b);
function main(){
    // let x=1;
    try {
        console.log("The Sum is",sum*x);
        return true;
    } catch (error) {
        console.log("Error: ", error.message);
        return false;
    }
    finally{
        console.log("Finally block");
    }
}

let c=main();