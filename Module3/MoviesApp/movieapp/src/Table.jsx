import Pagination from "./Pagination";
import "./Table.css";
import React from "react";

class Table extends React.Component {
    
    // console.log("Table this.props");
    // console.log(this.props.moviesData);
    // class ke ander let keyword use nhi kar sakte , render ke ander kar sakte hai
    
    state = {
        currPage: 1
    }

    selectPage = (value)=>{
       this.setState({currPage: value});
    }
    
    render(){
        
        let allMovies = this.props.moviesData;
        let currFilter = this.props.selectedFilter;
        
        
        let filteredMoviesArr = allMovies.filter((el)=>{
            if(currFilter == "All Genre"){
                return el;
            }
            else if(el.genre.name == currFilter){
                return el;
            }
        });
        let numberOfPages = Math.ceil(filteredMoviesArr.length / 4);
    
        let arrToBeUsedInTable = filteredMoviesArr.slice(0,4);
        // console.log(arrToBeUsedInTable)

        return (
        <>
            <div class="row">
                <div class="col-10">

                    <table class="table mt-4">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Rate</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                arrToBeUsedInTable.map((el)=>{
                                     return (
                                         <tr key={el._id}>
                                              <td>{el.title}</td>
                                              <td>{el.genre.name}</td>
                                              <td>{el.numberInStock}</td>
                                              <td>{el.dailyRentalRate}</td>
                                              <td onClick={
                                                  ()=>{ // toggle liked key
                                                       this.props.toggleHeart(el._id);
                                                  }}>
                                                 { // right way => ApI ke data mein like name ki to koi key hai hi nhi 
                                                   el.liked ? (<span class="material-icons-outlined">favorite</span>) : (<span class="material-icons-outlined">favorite_border</span>) 
                                                 }
                                                 
                                              </td>
                                              <td><button onClick={()=>{
                                                    this.props.deleteMovie(el._id);
                                               }} className="table-delete-btn">Delete</button></td>
                                         </tr>
                                     );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <Pagination selectPage={this.selectPage} currPage={this.state.currPage} numberOfPages= {numberOfPages} />
        </>

      );
    }

    
}

export default Table;