


function convertToRoman(num) {
    if (num == 'I')
        return 1;
    if (num == 'V')
        return 5;
    if (num == 'X')
        return 10;
    if (num == 'L')
        return 50;
    if (num == 'C')
        return 100;
    if (num == 'D')
        return 500;
    if (num == 'M')
        return 1000;
    return -1;
}

// Finds decimal value of a
// given roman numeral
function romanToDecimal( str)
{
 
    // Initialize result
    var res = 0;

    for (let i = 0; i < str.length; i++)
    {
     
        // Getting value of symbol s[i]
        var s1 = convertToRoman(str.charAt(i));

        // Getting value of symbol s[i+1]
        if (i + 1 < str.length) {
            var s2 = convertToRoman(str.charAt(i + 1));

            // Comparing both values
            if (s1 >= s2) {
               
                res = res + s1;
            }
            else
            {
             
                // Value of current symbol is
                // less than the next symbol
                res = res + s2 - s1;
                i++;
            }
        } else {
            res = res + s1;
        }
    }

    return res;
}

convertToRoman(36);