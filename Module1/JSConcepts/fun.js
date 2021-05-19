console.log(a);
console.log(fun); // abhi fun ek variable hai ise nhi pta ki ye ek function ban jayega so undefined (although memory mil chuki hai)
fun(); // fun is not a function // becoz fun doesn't know it is a function

let a = 20;
let fun = function(){
    console.log("Fun Says Hi !!!");
}