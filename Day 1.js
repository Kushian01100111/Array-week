// Do you know how to compare arrays? Not sure? Don't worry, you'll figure it out...

// Today's task is to write a function that will check equality between 2 arrays with a particular structure.

// The arrays will:

// Be of equal size
// Will each contain some number (X) arrays
// Each inner array will contain that same number (X) primitive elements
// All the nested primitives within each array must strictly match to return a true result. Any mismatches will return false.

// a function as parameters 2 different arrays - not empty arrays - inner arrays - inner arrays will have the same length between the two argument arrays - and the arrays arguments will have the same length - inner array will have only string values
//
function compare(arr1,arr2){
    let result;
    for(let i = 0 ; i < arr1.length; i++){
        arr1[i]
        for(let x = 0; x < arr1[i].length; x++){
            arr1[i][x] !== arr2[i][x] ? result = false: null
        }
    }
    return result !== undefined ? result : true
}

const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]

console.log(compare(arr1,arr2))
console.log(compare(arr1,arr3))
console.log(compare(arr1,arr4))

