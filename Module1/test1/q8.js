// dec = 45
// bin = 101101


let ans = 0;
let pow = 1;
console.log(decToBin(45));

function decToBin(n){
   
    while(n>0){
       let rem = n%2;
       ans += rem*pow;
       n = n/2; 
       pow = pow*10;
    }
   return ans;
}