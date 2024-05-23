console.log("This is Promises")

let prom1=new Promise((resolve,reject)=>{
    let a=Math.random()
    if(a>0.5){
        setTimeout(()=>{
            console.log("Yes, I am Done")
            resolve('Promise 1 is done')
        },0);
    }
    else{
        reject('Error Failed in Promise 1')
    }
});


let prom2=new Promise((resolve,reject)=>{
    let a=Math.random()
    if(a>0.5){
        setTimeout(()=>{
            console.log("Yes, I am Done 2")
            resolve('Promise 2 is done')
        },0);
    }
    else{
        reject('Error Failed in Promise 2')
    }
})

let p3=Promise.race([prom1,prom2]);
p3.then((a)=>{
    console.log(a);
}).catch(err =>{
    console.log(err);
})