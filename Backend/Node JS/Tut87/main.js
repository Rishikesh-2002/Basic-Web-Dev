const fs=require("fs")


console.log("Starting")
fs.writeFileSync("rishi.txt","Rishikesh is a good boy");

fs.writeFile("rishi2.txt", "Rishi is a good boy2",()=>{
    console.log("done")
    fs.readFile("rishi2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("rishi.txt","\t\t\t\destroyer",(e,d)=>{
    console.log(e)
})

console.log("ending")