// I need twin functions, a function that swaps a given primitive value in a given 1-dimensional array to an index to the left, and another that swaps it to the right.

// Some things to note:

// If the given value is on the edge of the array and can't move in that direction, don't move it.
// The given primitive value will only occur once in the array
// The array passed in should be mutated by this function. Scandalous, I know.

function toLeft(arr,value){
    let index =  arr.findIndex(n=> n === value)
    if(arr[index] !== arr[0]){
        let moment = arr[index - 1]
        arr[index - 1] = arr[index]
        arr[index] = moment 
    }
}

function toRight(arr,value){
    let index =  arr.findIndex(n=> n === value)
    if(arr[index] !== arr[arr.length - 1]){
        let moment = arr[index + 1]
        arr[index + 1] = arr[index]
        arr[index] = moment 
    }
}

myArray = ['abc', 'xyz', 1, 2, 'Hey!']

// call move left function with 'xyz' and myArray as arguments

toLeft(myArray, 'xyz')
console.log(myArray)   // ['xyz', 'abc', 1, 2, 'Hey!']

// call move left function again, same arguments
// Note that 'xyz' is already as far left as it can go
toLeft(myArray, 'xyz')
console.log(myArray) // ['xyz', 'abc', 1, 2, 'Hey!'] no change

// call move right function this time, with 2 and myArray as arguments
toRight(myArray, 2)
console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2]

// call move right function again, same arguments
// Note that 2 is already as far right as it can go
toRight(myArray, 2)
console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2] no change
