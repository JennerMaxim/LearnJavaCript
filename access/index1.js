// "use strict";
// tom = 12;
scopeFunction();
// document.getElementById("scope").innerHTML = "Hi " + carName;
function scopeFunction() {
  // "use strict"
  //   carName = "Bugatti";
}

var scope1 = "Maxim";
document.getElementById("scope").innerHTML = window.scope1;

eval("var x = 2");
// alert(x);

// with (Math){x = cos(2)};
/* delete Object.prototype;
var obj = {
  get x() {
    return 0;
  },
}; */
// Object.defineProperty(obj, "x", {value: 0, writable: false});
// obj.x = 1;

function strictFunction() {
  alert(this);
}
// strictFunction();

/* var x = this;
document.getElementById("this").innerHTML = x; */

function thisFunction() {
  // "use strict";
  var person = {
    fname: "Kagheni",
    lname: "Maximillien",
    id: 118887,
    fullname: function () {
      return this;
    },
  };
  /*   var x = this;
  function thisInFunction(){
    return this
  } */

  var person1 = {
    fullname: function () {
      return this.fname + " " + this.lname;
    },
  };
  var person2 = {
    fname: "Kagheni",
    lname: "Maximillien",
  };
  var x = person1.fullname.call(person2);
  document.getElementById("this").innerHTML = x;
}

function letFunction() {
  let i = 5;
  for (let i = 0; i < 10; i++) {}

  let carName = "Maxim";
  document.getElementById("let").innerHTML = window.carName;
}

function constFunction() {
  const car = {
    type: "Ferrari",
    model: "500",
    color: "Black",
  };
  car.color = "Red";
  car.ower = "Kagheni";

  const carArray = ["Ferrari", "Kagheni", "Maxim"];
  carArray[1] = "Bugatti";
  carArray.push("Audi");
  document.getElementById("const").innerHTML = carArray;
}

const arrowFunction = () => {
  var hello;
  hello = function () {
    return "Hello Word!";
  };

  hello = (val) => "Hello Word! from " + val;
  document.getElementById("arrow").innerHTML = hello("Arrow Function!");
};

var hello;
hello = function () {
  document.getElementById("regular").innerHTML += this;
};
// hello();

window.addEventListener("load", hello);

// document.getElementById("regularFunction").addEventListener("click", hello);
document
  .getElementById("regularFunction")
  .addEventListener("click", arrowFunction);

hello = () => {
  document.getElementById("regular").innerHTML += this;
};
window.addEventListener("load", hello);
document.getElementById("regularFunction").addEventListener("click", hello);

function classFunction() {
  class Car {
    constructor(brand) {
      this._carname = brand;
    }
    /*     present() {
      return "I have a  " + this.carname;
    } */
    set carname(x) {
      this._carname = x;
    }
    get carname() {
      return this._carname;
    }
  }
  /*   class Model extends Car{
    constructor(brand, mod){
      super(brand);
      this.model = mod;
    }
    show(){
      return this.present() + ", it is a " + this.model;
    }
  } */
  var mycar = new Car("Ford");
  mycar.carname = "Volvo";
  document.getElementById("class").innerHTML = mycar.carname;
}
/* class Car {
  constructor(brand) {
    this.carname = brand;
  }
}
mycar = new Car("Ford");
document.getElementById("class").innerHTML = mycar.carname;
 */