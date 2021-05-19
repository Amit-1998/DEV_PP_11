// var name = "steve";

// function fun(){
//     var b = 20;
//     console.log(name);
//     function y(){
//         console.log(b);
//     }
//     y();
// }

// fun();

var name = "steve";

            function fun() {
                  var b = 20;
                  console.log(name);
                  function y() { // along with it's khud ka local scope, it has closure contains bahar ki values i.e b=20
                     console.log(b); // 20 (closur doesn't have copy,infact it has a pointer to above value)
                   }
                  b= 100; // it just update b to 100 so closure baitha b bhi 100 ko point karega
                 return y;
            }

          var newFun = fun();
          newFun();
