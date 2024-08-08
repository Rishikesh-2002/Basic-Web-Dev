import fs from "fs/promises"

let a=await fs.readFile("rishi.txt")

let b=await fs.appendFile("rishi.txt", "\n\n\nthis is amazing promise")
console.log(a.toString(),b)