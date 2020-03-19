//proto: cada obj cuando se crea recibe su prototype,si el proto no esta establecido ,
//los obj reciben un proto predeterminado como su obj de herencia
function Letter(number) {
    this.number = number;
  }
  //esta funcionm va ser parte de letter
  Letter.prototype.getNumber = function(){
      return this.number;
  }
  //este objeto igual tiene el prototype
  var a = new Letter(3);
  var b = new Letter(100);

  console.log(a.getNumber) //output Letter{number : 3}
