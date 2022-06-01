function sumOfDifferences(arr) {
    let newArray = arr.sort((a,b) => b-a);
    let sum = 0;
    for(let i = 0; i < (newArray.length-1); i++){
  let differenceBetweenPair = newArray[i] - newArray[i + 1];
     sum += differenceBetweenPair;
      console.log(newArray[i]-newArray[i+1]);
      
    
    }    console.log(sum);
    return sum;
  }
  sumOfDifferences([-3, -2, -1])//2);
  sumOfDifferences([1, 2, 10])// 9);


