let random=Math.random();

let a=prompt("Enter First Number");
let b=prompt("Enter Operation");
let c=prompt("Enter Second Number");

obj={
    "+":"-",
    "-":"*",
    "*":"/",
    "/":"**",
}

if(random<0.5){
    b=obj[b];
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}
else{
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}