/*
Algorithm to convert Roman Numerals to Integer Number:  

Split the Roman Numeral string into Roman Symbols (character).
Convert each symbol of Roman Numerals into the value it represents.
Take symbol one by one from starting from index 0: 
If current value of symbol is greater than or equal to the value of next symbol, then add this value to the running total.
else subtract this value by adding the value of next symbol to the running total.

*/


function convertToRoman(num) {
let romanToNum ={
M:1000,
CM:900,
D:500,
CD:400,
C:100,
XC:90,
L:50,
XL:40,
X:10,
IX:9,
V:5,
IV:4,
I:1
}
let roman = "";
for(let key in romanToNum){
while(num>=romanToNum[key]){
roman +=key;
num -=romanToNum[key];
}
}   
console.log(roman);
return roman;
}

convertToRoman(36);