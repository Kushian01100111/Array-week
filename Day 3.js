// Today's challenge is a bit of a tangent, but I think it's pretty powerful. It's inspired by my favorite Codewars kata ever, Moving Zeros To The End. This is my favorite kata because the first time I did it, my approach was so convoluted compared to the top-voted solution, which was a thing of beautiful simplicity. I think the moment I saw that solution something clicked for me and I realized the power of the built-in Javascript methods.

// Today I'd like you to write a function that:

// takes in a given array of strings and move any entries containing the letter 'a' to the front
// then move any remaining entries that have over 3 characters to the back
// please preserve the relative order of entries within their given category
// Example:

 myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
//  move things around
// => ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']

function move(arr) {
    let element = [],
        array = arr;
   
    array.forEach((e,i,a)=>{
        if(e.includes('a')){
            element.push(e);
          arr =  arr.filter((n)=> n !== e)
        };
    });

    arr.sort((a,b)=> a.length - b.length)

    return element.concat(arr)
}

move(myArr)