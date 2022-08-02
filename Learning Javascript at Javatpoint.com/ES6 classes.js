class Car{
constructor(name){
  this.brand=name;
}
present(){
    return 'i have a ' + this.brand;
    }
}

class Model extends Car{
   constructor(name, mod) {
   super(name);
   this.model = mod;
    
   }
   show(){
    return this.present() + ", it is a " + this.model
 }
}


const myCar = new Model("Ford", "Lamborghini");
myCar.show();
console.log(myCar.show())


hello = () => 'This is baddest boy';

