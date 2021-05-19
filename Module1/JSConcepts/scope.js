// let is block scoped
// const is block scoped

// var => function scope

// var a = 20;

// console.log(a); //20

// if(true){
//     var a = 50; // it updates the uper vaali a ki value
//     console.log(a); //50
// }

// function callMe(){ // jaise hi function dikha ab is ke khud ke variables honge (alag Execution context banega)
//     //console.log(a); //undefined
//     var a = 100;
//     console.log("Inside call me");
//     console.log(a); // 100
// }

// callMe();

// console.log(a); //50

let a = 20;
        console.log(a);

        if (true) {
            let a = 50;
            console.log(a);
        }

        function callMe() {
            console.log(a);
            let a = 100;
            console.log("Inside call me");
            console.log(a);
        }

        callMe();

        console.log(a);

