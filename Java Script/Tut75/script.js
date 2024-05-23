console.log("I am a hacker");
console.log("He is a hecker");

setTimeout(()=>{
    console.log("I am inside settimeout");
},0);

console.log("You are a hacker");

setTimeout(()=>{
    console.log("I am inside settimeout 2");
},0);


const callback=(arg,fn)=>{
    console.log(arg);
    fn();
}
const fn=()=>{
    console.log("World");
}

const loadscript=(src, callback)=> {
    let script = document.createElement('script');
    script.src = src;
    script.onload= callback("Hello", fn);
    document.head.append(script);
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )