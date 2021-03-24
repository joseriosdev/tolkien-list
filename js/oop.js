// FILE CREATED AS A NOTEBOOK FOR OOP IN JS / EXERCIES HERE


/*
Everything in JS it's a prototype
prev exercies shows the object itself but we can add the methods to an additional layers
which is his prototype, that actually it's already inhereting some aspects from the OBJ protoptype from JS
so we can create our own prototype that it's also a class here.
*/

function Car(color, brand, type, year) {
  this.color = color;
  this.brand = brand;
  this.type = type;
  this.year = year;
}

Car.prototype.printCarInfo = function() {
  return `${this.brand} ${this.type} ${this.year} color ${this.color}`
}

const carro = new Car("black", "toyota", "corolla", 2021);


//Small practice, knowing and understanding object literal, and THIS keyword

function Persona(firstName, lastName, dob) {
  this.name = firstName;
  this.lastName = lastName;
  this.fullName = `${firstName} ${lastName}`;
  this.dob = new Date(dob);
  //this.age = getAge();

  //private
  function sum(a,b) {
    return a+b;
  }
  //public
  this.saludo = function() {
    console.log(`¡Hola! Me llamo ${this.fullName} y tengo ${this.getAge()} años de edad.`);
    console.log(`Fijate que a+b es ${sum(2,5)}`);
  }

  this.getAge = function() {
    const diff = Date.now() - this.dob.getTime();
    return new Date(diff).getUTCFullYear() - 1970;
  }
}

let jose = new Persona("Jose", "Rios", "03/10/1997");