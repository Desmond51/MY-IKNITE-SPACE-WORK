/*    Xmas Tree 7ku

          Problem

Complete the function that returns a christmas tree of the given height. The height is passed through to the function and the function should return a list containing each line of the tree.

XMasTree(5) should return : ['____#____', '___###___', '__#####__', '_#######_', '#########', '____#____', '____#____']
XMasTree(3) should return : ['__#__', '_###_', '#####', '__#__', '__#__']

Pad with underscores (_) so each line is the same length. Also remember the trunk/stem of the tree.

Examples

The final idea is for the tree to look like this if you decide to print each element of the list:

n = 5 will result in:

____#____              1
___###___              2
__#####__              3
_#######_              4
#########       -----> 5 - Height of Tree
____#____        1      
____#____        2 - Trunk/Stem of Tree


n = 3 will result in:

__#__                  1
_###_                  2
#####          ----->  3 - Height of Tree
__#__           1
__#__           2 - Trunk/Stem of Tree
 

*/

       //Steps

//- 

function xMasTree(n) {
    let hash = "#";
    let underscore = "_";
    let chrismastTreeArray = [];
    let maxWidth = n*2-1;
    chrismastTreeArray.push(underscore.repeat(n-1).concat(hash).concat(underscore.repeat(n-1)))
    chrismastTreeArray.push(underscore.repeat(n-1).concat(hash).concat(underscore.repeat(n-1)))

    let tempMaxWidth = maxWidth;

     
    while(tempMaxWidth > 0 ){
        // console.log(tempMaxWidth)
        chrismastTreeArray.unshift(underscore.repeat((maxWidth-tempMaxWidth)/2).concat(hash.repeat(tempMaxWidth)).concat(underscore.repeat((maxWidth-tempMaxWidth)/2)))
        tempMaxWidth -= 2
    }

    console.log(chrismastTreeArray)
  
        return chrismastTreeArray;
     
    }
    
    xMasTree(10);

 /*     Solution 2 

 function xMasTree(n){
  const arr = [];
  let str = '';
   for( let i = n-1; i >= 0; i-- ){
    str = '_'.repeat(i) + '#'.repeat(n-1-i) + '#' + '#'.repeat(n-1-i) + '_'.repeat(i);
    arr.push(str);
    str = ''
   }
    arr.push(arr[0], arr[0])
  return arr
} */