// You are given a week's rainfall data of few cities 
// Using the data write a function rainDance which returns an array of objects each object containing city name and average rainfall.



// [
//   { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] },
//   { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] },
// ];


// [
//   { name: "Roorkee", avgRainfall: 5.714285714285714 },
//   { name: "Pauri", avgRainfall: 2.2857142857142856 },
// ];

let ans = [];

function rainDance(arr){

   for(let i=0; i<arr.length; i++){
      let inpobj = arr[i];
      let avgRainfall = 0;
      let sum = 0;
      let rainfall = inpobj.rainfall;
      
      for(let i=0; i<rainfall.length; i++){
        sum += rainfall[i];
     }
     avgRainfall = sum/rainfall.length;
      let obj = {
         "name" : inpobj.name,
         "avgRainfall" : avgRainfall
      }
      ans.push(obj);
   }
     
}