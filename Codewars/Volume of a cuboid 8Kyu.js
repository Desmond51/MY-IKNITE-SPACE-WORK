// 

/*   Problem

Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

                 Steps
1- Assume that the length of the cuboid = l, volume = v, width = w and height = h.
2- Multiply the length, width and heigh
3- Derive the formula for thevolume of the cubic which is V = lwh.
*/
                  //Solution

/*let length = "l";
let width = "w";
let height = "h";
let volume = "v";
   volume = length * width * height;
   console.log("My vilume =" +volume); */
function volume(length, width, heigh){
    let vol = length*width*heigh;
    return vol;

}
console.log(vol)
                

//sample test

//   Test 

Kata.getVolumeOfCuboid(1,2,2), 4);
Kata.getVolumeOfCuboid(6.3,2,5), 63);