// Imagine, if you will, an array with length X, with each of its entries having X number of primitives as their entries. Now imagine it arranged as a grid.

/// for the less imaginative among us :) 
// [[0,1,2],[3,4,5],[6,7,8]]

// as a grid
// [
// [0,1,2],
// [3,4,5],
// [6,7,8]
// ]
// Still with me? I hope so! Today I need your help moving some things around again. I'm always rearranging.

// Please write twin functions that each take in a given value that will only appear once within a given array of a similar structure to the one described above, which will either move that value up one row or down one row in the array, keeping its same horizontal position. It will essentially swap places with whatever was where it needed to be. Just like in Day 2, don't do anything if the given value is already as high or low as it can get.

// Parameter is a array || that contains other subarrays || subarray will only contains string as values || could be a infinete amount subarrays || the subarray will all have the same length 
// I will get same array but with one value swicth to a the same index of the subarray up or down depending of the function use, so the values will swicth of array but not index. => if the value search is either on the last or first subarray and if the function call is down or up repectbly then the value can't go down or up 

// up([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']], 'h') => [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]

// Check the first one and last one of the array for the value
// If they have the value up() => is in the last one? switch the value with the previus subarray index || is in the first one ? return the array as is it is. Down() =>is in the last one? return the array as is it is || is in the first one ? switch the value with the next subarray index.
// if the value is not there search inside of the rest of subarray
// find the index of the value and saved
// i will save the value of the next subarray corresponding index(Down) or the previus subarray corresponding index
// I will change the value in that index in those subarray with the selected value and the selected value original subarray index will change for the value that i save.

function up(arr,str){
    if(arr[0].indexOf(str) !== -1) return arr
    if(arr[arr.length -1].indexOf(str) !== -1){
        let temp= arr[arr.length -2][arr[arr.length -1].indexOf(str)],
            use = arr[arr.length -1].indexOf(str),
            val = arr.length -2
        arr[val][use] = str
        arr[val + 1][use] = temp
        return arr
    }

    for(let i = 1; i < arr.length - 1; i++ ){
        if(arr[i].indexOf(str) !== -1){
            let temp = arr[i-1][arr[i].indexOf(str)],
                use = arr[i].indexOf(str)
            arr[i-1][use] = str
            arr[i][use] = temp
            break 
        }
    }

    return arr
}

function down(arr,str){
    if(arr[arr.length -1].indexOf(str) !== -1) return arr
    if(arr[0].indexOf(str) !== -1){
        let temp= arr[0 + 1][arr[0].indexOf(str)],
            use = arr[0].indexOf(str),
            val = arr[1]
        arr[val][use] = str
        arr[val - 1][use] = temp
        return arr
    }

    for(let i = 1; i < arr.length - 1; i++ ){
        if(arr[i].indexOf(str) !== -1){
            let temp = arr[i+1][arr[i].indexOf(str)],
                use = arr[i].indexOf(str)
            arr[i+1][use] = str
            arr[i][use] = temp
            break 
        }
    }

    return arr
}


myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

// call move up function with 'h' and myGrid
up(myGrid, 'h')
console.log(myGrid,[['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']])

// call move up function again, same arguments
up(myGrid, 'h')
console.log(myGrid, [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']])

// call move up function again, same arguments
// Note that 'h' is already as far up as it can go
up(myGrid, 'h')
console.log(myGrid, [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']])

// call move down function this time, with 'f' and myGrid as arguments
down(myGrid, 'f')
console.log(myGrid, [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']])

// call move down function again, same arguments
// Note that 'f' is already as far down as it can go
down(myGrid, 'f')
console.log(myGrid, [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']])