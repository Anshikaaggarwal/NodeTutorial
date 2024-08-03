function add(a,b){
  return a+b;
}
function sub(a,b){
  return b-a;
}
function mul(a,b){
  return a*b;
}
function div(a,b){
  return b/a;
}

module.exports = {
  add,
  sub,
  mul,
  div
}
//we can also make an anonymous function and export it
//exports.add = function(a,b) => a+b; this is an arrow function

