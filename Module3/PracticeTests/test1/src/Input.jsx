let Input = (props) => {
    let clkFun=(e) => {
        if(props.op===''){

            props.v1change(e.target.textContent)
        }
        else{
            props.v2change(e.target.textContent)
        }
        }
    return (
        <div className="ip-btn">

            <button onClick={(e)=>{clkFun(e)}}>1</button>
            <button onClick={(e)=>{clkFun(e)}}>2</button>
            <button onClick={(e)=>{clkFun(e)}}>3</button>
            <button onClick={(e)=>{clkFun(e)}}>4</button>
            <button onClick={(e)=>{clkFun(e)}}>5</button>
            <button onClick={(e)=>{clkFun(e)}}>6</button>
            <button onClick={(e)=>{clkFun(e)}}>7</button>
            <button onClick={(e)=>{clkFun(e)}}>8</button>
            <button onClick={(e)=>{clkFun(e)}}>9</button>
            <button onClick={(e)=>{clkFun(e)}}>0</button>
        </div>
    )

}
export default Input;