
function disemvowel(str){
let newStr = str;
 let final = newStr.replace(/[aeiou]/gi, '');
 console.log(newStr.replace(/[aeiou]/gi, ''));
 return final;
}

disemvowel("This website is for loosers LOL");