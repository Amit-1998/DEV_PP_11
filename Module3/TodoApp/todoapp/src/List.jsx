// List ke component ko ham functional component bnayenge
// reason : List comp mein jo bhi data aayega vo uska Parent bhejega to there is no need ki iska khud ka data bnaya jaye i.e state to hame ise claddBased Component Bnane ki jaroorat nahi padi
let List = (props)=>{
    
    return(
         
        <ul>
           {
                props.tasks.map((el) => {
                       return ( 
                           <li>
                             {el}{" "} 
                              {
                                  <button onClick={() => {

                                    //    let currTaskArr = this.state.tasks; // ye jo state hai ye App.js mein bni state ko refer kar rha hai

                                    //    let filteredArr = currTaskArr.filter((element) => {
                                    //                      return element != el
                                    //                      });
                                    //    this.setState({ tasks: filteredArr });
                                    props.deleteTask(el);


                                  }}>Delete</button>
                              }
                           </li> 
                       );
                })
           }
       </ul>

    );
}

export default List;