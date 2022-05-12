 /*The Western Suburbs Croquet Club has two categories 
 of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at 
least 55 years old
 and have a handicap greater than 7. In this croquet
  club, handicaps range from -2 to +26; the better
   the player the lower the handicap. 
            
   Steps

   -We will consider a list of pairs. 
   -Each pair contains information for a single potential 
   member. Information consists of an integer for
    the person's age and an
    integer for the person's handicap.
   -We can assign age gets assigned to 
   18 and handicap gets assigned to 20
   
   step
   - Loop through the array
   - check if the member is atleast 55 of age and has a handicap greater than 7
   - Return true if the above information is correct else return false.
   
   */
   function openOrSenior(data) {
       // return data.map(([age, handicap]) => (age >= 55 && handicap > 7 ? placedMemberShip.push("Senior") : placedMemberShip.push("Open")))
        console.log( data.map(([age, handicap]) => (age >= 55 && handicap > 7 ? "Senior" : "Open")))
   }


   // Test

    openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]) //,['Open', 'Senior', 'Open', 'Senior'])
    openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]) //,['Open', 'Open', 'Open', 'Open'])
    openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]) //,['Senior', 'Open', 'Open', 'Open'])
 

