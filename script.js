//Root scope(windows)

var fun = 5;

function blaFunction() {
  //child scope
  var fun = "heloistan";
  console.log(fun);
}

function blaerFunciton() {
  //child scope
  var fun = "byee";
  console.log(fun);
}

function blaestFunction() {
  //child scope
  fun = "byee";
  console.log(fun);
}

console.log("window", fun);
blaFunction();
console.log(fun);
blaerFunciton();
console.log(fun);
blaestFunction();
console.log(fun);
