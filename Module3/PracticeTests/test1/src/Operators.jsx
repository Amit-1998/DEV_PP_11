let Operators = (props) => {

    let update = (e)=>{
       
         if(props.optr==""){
             
             props.changeExp(e.target.textContent);
             //  props.optr = e.target.textContent;
             //  props.exp = props.exp + props.optr;
         }
         else if(props.optr!=="" && e.target.textContent === "="){
            //  props.optr = e.target.textContent;
             props.ans(props.optr);
         }
    }

    return (
        
        <div className="Opbuttons">
            <button onClick={ (e)=>{update(e);} }>+</button>
            <button onClick={ (e)=>{update(e);} }>-</button>
            <button onClick={ (e)=>{update(e);} }>/</button>
            <button onClick={ (e)=>{update(e);} }>*</button>
            <button onClick={ (e)=>{update(e);} }>=</button>
        </div>
    )
}

export default Operators;