//Create an empty hash table. One by one traverse 
//the given array elements and store counts. 
//The time complexity of this solution is O(n). 
//But it requires extra space for hashing.


//Javascript program to find the element occurring odd
// number of times
     
    // function to find the element occurring odd
    // number of times
    function getOddOccurrence(arr,n)
    {
        let hmap = new Map();
          
        // Putting all elements into the HashMap
        for(let i = 0; i < n; i++)
        {
            if(hmap.has(arr[i]))
            {
                let val = hmap.get(arr[i]);
                // If array element is already present then
                // increase the count of that element.
                hmap.set(arr[i], val + 1);
            }
            else
            {    
                // if array element is not present then put
                // element into the HashMap and initialize
                // the count to one.
                hmap.set(arr[i], 1);
            }
        }
         
  
        // Checking for odd occurrence of each element present
        // in the HashMap
        for(let [key, value] of hmap.entries())
        {
            //document.write(hmap[a]+"<br>")
            if(hmap.get(key) % 2 != 0)
                return key;
        }
        return -1;
    }
     
    // driver code  
    let arr=[2, 3, 5, 4, 5, 2, 4, 3, 5, 2, 4, 4, 2];
    let n = arr.length;
    document.write(getOddOccurrence(arr, n));
    console.log()
     
     
    // This code is contributed by unknown2108