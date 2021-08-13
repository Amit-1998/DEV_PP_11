import React from "react";
// Filter comp ko class comp isliye bnaya kuki hame ye check karna the ki pehle se konsa filter active hai to uske liye state chaiye hoti
let Filter = (props)=>{ 
    // console.log("This is from Filter props");
    // console.log(props.genreData);
    
    // state = {
    //     selectedFilter: "All Genre"
    // }
    
        return (
            <div class="col-3">
                <ul class="list-group m-4">
                    <li onClick={(e)=>{
                        props.handleFilter("All Genre");
                    }}
                    class={`list-group-item ${props.selectedFilter=="All Genre" ? "active" : ""}`}> All Genre</li>
                    {
                        props.genreData.map( (el)=>{
                            return <li onClick={(e)=>{
                                // e.currentTarget.classList.add("active");
                                props.handleFilter(el.name);
                            }} key={el._id} class={`list-group-item ${props.selectedFilter== el.name ? "active" : ""}`}>{el.name}</li>
                        })
                    }
                </ul>
            </div>
        );
    

}

export default Filter