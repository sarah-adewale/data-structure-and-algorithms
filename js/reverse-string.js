/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a 
reversed format.
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

//string, no numbers, no special characters
//string - no funny business

console.log(reverseString('algorithms'), 'smhtirogla')
console.log(reverseString('sarah'), 'harhs')
console.log(reverseString('kenenna'), 'annenek')

//create a function called reverseString, split the string, then reverse the string
//and then glue it back using the join() method

// function reverseString(text){
//     text = text.split()
//     return text.reverse().join()
// }

function reverseString(text){
    text = text.split()
    return text.reduce((acc, c) => c + acc) //constant complexity O(1) 
}

