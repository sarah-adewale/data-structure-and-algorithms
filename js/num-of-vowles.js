/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

//string, no special characters, no numbers
//number - no funny business
console.log(vowelsCounter('anehizxcv'), 3)
console.log(vowelsCounter('sarah'), 2)
console.log(vowelsCounter('caterpillar'), 4)
//create a function called vowelsCounter, create a vowel variable and assign it an array of all the vowels
//create another variable called sum and assign it a value of 0, use a loop to go thru the array, and then a 
//conditional to check it the value in the string matches the value in the vowel array. return the count



function vowelsCounter(text){
    const vowels = ['a','e','i','o','u']
    let sum = 0
    for(let char of text.toLowerCase()){
        if(char.includes(vowels)){
            sum++
        }
        
    }
    return sum
}

const vowels = ['a', 'e', 'i', 'o', 'u']

function vowelsCounter(text) {
// Code goes here
// initialize counter
let count = 0
// loop
for(let letter of text.toLowerCase()){
// conditional
if(letter.includes(vowels)){
count++
}
}
return count
}

function vowelsCounter(text){
// search text matching to store all matchiing instances
let matchiingInstances = text.match(/[aeiou]/gi) //match() returns an array
// of matching values. For simple patterns, Regular expressions are usually
//defined within a pair of slashes. g stands for a global search which means
// that after finding the first match, it will not start over from the
// beginning but continue searching from the end of the previous match.
//i stands for case insensitive search which makes the whole expression
// case-insensitive (for example /xyz/i would match XyZ).

// check if match instances exist and count the length
if(matchiingInstances){
return matchiingInstances.length
}else{
return 0
}
}

function vowelsCounter(text){
    let matchingInstances = text.match(/[aeiou]/gi)
    if(matchingInstances){
        return matchingInstances.length
    }else{
        return 0
    }
}