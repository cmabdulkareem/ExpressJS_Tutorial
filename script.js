let dataCurrentlyAvailable = false;
let data = [
    {name: "John", age: 25},
    {name: "Jane", age: 30}
]


function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dataCurrentlyAvailable) {
                resolve(data)
            } else {
                reject("No data available")
            }
        }, 2000)
    })
}

async function displayData(){
    try {
        const result = await getData()
    } catch (x) {
        console.error(x)
    }
    console.log("running")
}



