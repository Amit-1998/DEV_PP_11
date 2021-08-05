let Input = (props)=>{

    return(
        <input className="input-box"
                    type="text"
                    onChange={(e) => {
                        props.handleCurrInput(e.currentTarget.value); // App.js ke handleCurrInp funct ka address aa jata hai props ke paas
                    }}
                    onKeyDown={(e) => {
                        if ((e.key === "Enter")) {
                            props.handleTasks();
                        }
                    }

                    }
                    value={props.currInput}  // initial value
        />
    );
}

export default Input;