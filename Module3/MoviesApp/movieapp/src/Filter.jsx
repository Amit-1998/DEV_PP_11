import React from "react";
// Filter comp ko class comp isliye bnaya kuki hame ye check karna the ki pehle se konsa filter active hai to uske liye state chaiye hoti
class Filter extends React.Component{ 
    // console.log("This is from Filter props");
    // console.log(props.genreData);
    state = {
        selectedFilter: "All Genre"
    }

    render(){
        
        return (
            <div class="col-3">
                <ul class="list-group m-4">
                    <li onClick={(e)=>{
                        this.setState( {selectedFilter: "All Genre"} );
                    }}
                    class={`list-group-item ${this.state.selectedFilter=="All Genre" ? "active" : ""}`}> All Genre</li>
                    {
                        this.props.genreData.map( (el)=>{
                            return <li onClick={(e)=>{
                                // e.currentTarget.classList.add("active");
                                this.setState( {selectedFilter: el.name} );
                            }} key={el._id} class={`list-group-item ${this.state.selectedFilter== el.name ? "active" : ""}`}>{el.name}</li>
                        })
                    }
                </ul>
            </div>
        );
    }

}

export default Filter