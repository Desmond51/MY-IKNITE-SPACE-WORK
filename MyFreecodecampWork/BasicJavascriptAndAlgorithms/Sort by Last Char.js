/* Problem: 7 kyu Sort by Last Cha

Question 

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.



*/

function last(x){

    let text = x;
const myArray = text.split(random);
console.log(myArray.sort());
}





//test 

last('man i need a taxi up to ubud')//, ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
last('what time are we climbing up the volcano')//, ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
last('take me to semynak')//, ['take', 'me', 'semynak', 'to']);    