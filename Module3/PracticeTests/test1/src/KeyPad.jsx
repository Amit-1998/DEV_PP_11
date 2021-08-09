let KeyPad = (props) => {
    
    let clickIt = (e)=>{
        // props : {
        //      val1: 0
        //      val2:0
        //      optr:""
        //      exp:""
        // }

        if(props.val1 === ""){

            props.updateVal1(Number(e.target.textContent));

        }
        else{
            props.updateVal2(Number(e.target.textContent));  
        }
    }

    return (

        <div className="keyPad">
            <button onClick={(e) => { clickIt(e); }}>0</button>
            <button onClick={(e) => { clickIt(e); }}>1</button>
            <button onClick={(e) => { clickIt(e); }}>2</button>
            <button onClick={(e) => { clickIt(e); }}>3</button>
            <button onClick={(e) => { clickIt(e); }}>4</button>
            <button onClick={(e) => { clickIt(e); }}>5</button>
            <button onClick={(e) => { clickIt(e); }}>6</button>
            <button onClick={(e) => { clickIt(e); }}>7</button>
            <button onClick={(e) => { clickIt(e); }}>8</button>
            <button onClick={(e) => { clickIt(e); }}>9</button>
        </div>
    )
}

export default KeyPad;