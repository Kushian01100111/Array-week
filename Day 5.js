// Please create a function that will take in an array like we've been working with all week (X-inner arrays of X-primitive values each) and shuffle it up in place. The inner primitive values can move to any of the inner arrays, but the length of those inner arrays must always remain X. Other than that, shuffle away! Do your best to have a thorough, random shuffle in a single call of your function.

function DIY(arr){
    let doneIndexes = []
    console.log(arr[0].length* arr.length)
    for(let i = doneIndexes.length; doneIndexes.length < (arr[0].length* arr.length)+1;){
        let firIndex = Math.round(Math.random()* (arr.length -1) ),
            seIndex = Math.round(Math.random() * (arr[0].length - 1)),
            reIndex = Math.round(Math.random()* (arr.length -1)),
            seReIndex = Math.round(Math.random() * (arr[0].length - 1))
            if(doneIndexes.some(n=> n.includes(firIndex,seIndex)) ||doneIndexes.some(n=> n.includes(reIndex,seReIndex) ) || reIndex === firIndex && seIndex === seReIndex) continue
        let temp = arr[firIndex][seIndex]
        arr[firIndex][seIndex] = arr[reIndex][seReIndex]
        arr[reIndex][seReIndex]= temp

        doneIndexes.push([firIndex,seIndex],[reIndex,seReIndex])
    }
}

DIY([
    [1,2,3],
    [4,5,6],
    [7,8,9]
    ])