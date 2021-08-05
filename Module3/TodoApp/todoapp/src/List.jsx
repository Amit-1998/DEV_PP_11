// List ke component ko ham functional component bnayenge
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