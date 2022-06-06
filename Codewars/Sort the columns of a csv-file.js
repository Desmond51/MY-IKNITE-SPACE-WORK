/*  problems: (6 kyu) Sort the columns of a csv-file

Question

#Sort the columns of a csv-file

You get a string with the content of a csv-file. The columns are separated by semicolons.
The first line contains the names of the columns.
Write a method that sorts the columns by the names of the columns alphabetically and incasesensitive.

An example:

Before sorting:
As table (only visualization):
|myjinxin2015|raulbc777|smile67|Dentzil|SteffenVogel_79|
|17945       |10091    |10088  |3907   |10132          |
|2           |12       |13     |48     |11             |

The csv-file:
myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n
17945;10091;10088;3907;10132\n
2;12;13;48;11

----------------------------------

After sorting:
As table (only visualization):
|Dentzil|myjinxin2015|raulbc777|smile67|SteffenVogel_79|
|3907   |17945       |10091    |10088  |10132          |
|48     |2           |12       |13     |11             |

The csv-file:
Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n
3907;17945;10091;10088;10132\n
48;2;12;13;11
There is no need for prechecks. You will always get a correct string with more than 1 line und more than 1 row. All columns will have different names.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.

Steps

- Group each column
-Sort the groups alphabetically
- Combine the groups. 
*/

function sortCsvColumns(csvFileContent) {

    let splitANewLine = csvFileContent.split(/\n/g);          
}



//  Test

const csv = require("6 kyu Sort the columns of a csv-file:");

  
it("should return sorted csv file");





/*
sortCsvColumns(preSorting)//, postSorting);
    
preSorting = "IronMan;Thor;Captain America;Hulk\n"
           + "arrogant;divine;honorably;angry\n"
           + "armor;hammer;shield;greenhorn\n"
           + "Tony;Thor;Steven;Bruce";
postSorting = "Captain America;Hulk;IronMan;Thor\n"
            + "honorably;angry;arrogant;divine\n"
            + "shield;greenhorn;armor;hammer\n"
            + "Steven;Bruce;Tony;Thor";
sortCsvColumns(preSorting)//, postSorting);    
*/