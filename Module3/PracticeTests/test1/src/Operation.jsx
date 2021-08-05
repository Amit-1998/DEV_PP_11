let Operation = (props)=>{
     let changeOptr=(e)=>{
         if(e.target.textContent=='='){
             props.answer();
         }
         else{
             props.changeStateOP(e.target.textContent);
         }
     }
     return(
         <div className="operation-btn">
             
         <button onClick={(e)=>{changeOptr(e)}}>+</button>
         <button onClick={(e)=>{changeOptr(e)}}>-</button>
         <button onClick={(e)=>{changeOptr(e)}}>/</button>
         <button onClick={(e)=>{changeOptr(e)}}>*</button>
         <button onClick={(e)=>{changeOptr(e)}}>=</button>
 
         </div>
     )
 
 }
 export default Operation;