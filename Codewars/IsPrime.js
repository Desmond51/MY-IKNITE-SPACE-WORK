/*6 kIs a number prime?  

Question

Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
Example
is_prime(1)  // false //
is_prime(2)  // true  //
is_prime(-1) // false //


*/

function isPrime(num){
	let result = true;
	if (num < 2){
	  return false;
	} else if (num === 2) {
	  return true;
	}
	if (num % 2 === 1){
	  for (let i=2; i<=Math.ceil(Math.sqrt(num)); i++){
		if(num % i === 0){
		  result = false;
		  break;
		}
	  }
	} else {
	  result = false;
	}
	return result;
  }

//  Test

	it("Test prime", () => {
		
	isPrime(3)//,  true, "3 is prime");
	isPrime(5)//,  true, "5 is prime");
    isPrime(7)//,  true, "7 is prime");
	isPrime(41)//, true, "41 is prime");
	isPrime(5099)//, true, "5099 is prime");
		
	});
	
	it("Test not prime", () => {
		
	isPrime(4)//,  false, "4 is not prime");
	isPrime(6)//,  false, "6 is not prime");
	isPrime(8)//,  false, "8 is not prime");
	isPrime(9)//, false, "9 is not prime");
	isPrime(45)//, false, "45 is not prime");
    isPrime(-5)//, false, "-5 is not prime");
	isPrime(-8)//, false, "-8 is not prime");
	isPrime(-41)//, false, "-41 is not prime");
		
	});
