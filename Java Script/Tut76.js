async function getdata(){
    let x=await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body: JSON.stringify({
            title: 'foo',
            body:  'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data=await x.json()
    return data;
}

async function main(){
    console.log("Loading Modules")

    console.log("Do Something Else")

    console.log("Load Data")

    let data=await getdata()

    console.log(data)

    console.log("Process Data")

    console.log("Task 2")
}

main()