let obj={
    a:1,
    b:"Rishi"
}

// console.log(obj);

let animal={
    eats:true
}

let rabbit={
    jumps:true
}

rabbit.__proto__=animal;

class Animal{
    constructor(name){
        this.name=name;
    }
    eats(){
        console.log("Eating...");
    }
    jumps(){
        console.log("Jumping...");
    }
}

class Lion extends Animal{
    constructor(name){
        super(name);
        console.log("Object is created and he is a Lion...")
    }
    eats(){
        super.eats();
        console.log("Lion is Eating...");
    }
}

let a=new Animal("Rocky");
// console.log(a);

let b=new Lion("Sheru");
console.log(b);
b.jumps();
b.eats();