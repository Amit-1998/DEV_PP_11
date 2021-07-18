// let menuOptionsOneDiv = document.querySelectorAll(".menu-options-1>div");
let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");

bold.addEventListener("click", function(){
   handleMenuOptionsOne("bold");
});
italic.addEventListener("click", function(){
  handleMenuOptionsOne("italic");
});
underline.addEventListener("click", function(){
  handleMenuOptionsOne("underline");
});

// for(let i=0; i<menuOptionsOneDiv.length; i++){
//     menuOptionsOneDiv[i].addEventListener("click", (e)=>{
//        let buttonClicked = e.target.parentNode.className;  
//        handleMenuOptionsOne(buttonClicked);
//     });
// }

function handleMenuOptionsOne(buttonClicked){
    if(buttonClicked == "bold"){
        // UI ??
        // last selected cell
        

        // DB ??

    }
}