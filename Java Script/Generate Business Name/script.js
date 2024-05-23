function generateAdj(){
    let random1=Math.random();
    if(random1<=0.33)
        return "Crazy";
    else if(random1>0.33 && random1<=0.67)
        return "Amazing";
    else
        return "Fire";
}

function generateShopName(){
    let random2=Math.random();
    if(random2<=0.33)
        return "Engine";
    else if(random2>0.33 && random2<=0.67)
        return "Foods";
    else
        return "Garments";
}

function generateAnotherWord(){
    let random3=Math.random();
    if(random3<=0.33)
        return "Bros";
    else if(random3>0.33 && random3<=0.67)
        return "Limited";
    else
        return "Hub";
}

function generateBusinessName(){
    let temp=generateAdj() + " " + generateShopName()+ " " + generateAnotherWord();
    return temp;
}

const a=prompt("Enter Number of Business Name You Want");

for(let i=1;i<=a;i++){
    console.log(`Your Business Name ${i}: ` + generateBusinessName());
}