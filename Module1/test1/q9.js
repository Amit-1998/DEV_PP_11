// "not picking" => "pot nicking" // split(" ")
// let splittedWords = ["not" , "picking"]

// let firstCharOfFIrst = splittedWords[0][0]; //n
// let firstCharOfSecond = splittedWords[1][0]; //p

// let string = "p" + "ot" + "n"+"icking"

let ans;
let str = "not picking";
console.log(spoon(str));

function spoon(str){
   let parts = str.split(" ");
   let first = parts[0];
   let sec = parts[1];
   
   let firstKaFirst = first[0][0];
   let secKaFirst = sec[0][0];
   ans = secKaFirst + first.slice(1) +" "+ firstKaFirst + sec.slice(1);
   return ans;
}