import React from "react";
import Filter from "./Filter";
import Navbar from "./Navbar";
import Pagination from "./Pagination";
import Search from "./Search";
import Table from "./Table";

class App extends React.Component {
  state = {
    movies: [],
    genre: [],
    selectedFilter: "All Genre"
  }

  setFilter = (filter)=>{
      this.setState( {selectedFilter: filter} );
  }

   toggleLike = (id)=> {
       let index = this.state.movies.findIndex((el)=>{
            // for each el in arr
            return el._id == id;
       });
       // make copy of moviesarr
       let currMoviesArr = this.state.movies.map((el) => el);
       if(currMoviesArr[index].liked){
           currMoviesArr[index].liked = false;
       }
       else{
          currMoviesArr[index].liked = true;
       }
       this.setState({movies: currMoviesArr});
   }

   deleteMovie = (id)=>{
       let filteredArr = this.state.movies.filter((el)=>{
            return el._id != id;
       });

       this.setState({movies: filteredArr});
       
   }

   componentDidMount() { // data ek baar hi laana hai to hum data compDidMount() mein likhenge
          // I will get data here
          // we are in context of FrontEnd side => all Browsers exposed some functionalities like fetch()
          // fetch() => which takes the link of file/API jha se data mangvaana hai
          // fetch() is a async function
          let f = async () => {
            // let result = await fetch("http://localhost:4000/movies"); //API link jha se data fetch karna hai
            // let result = await fetch("/movies");
            // console.log(result); // result contains bhot saari chise,one of them is json data call by.json() which fetch function provides us

            // let json = await result.json();
            // console.log(json);
            let responseGenre = await fetch("/genre");
            let responseMovies = await fetch("/movies");
            let moviesJson = await responseMovies.json();
            let genreJson = await responseGenre.json();

            this.setState({
              movies: moviesJson,
              genre: genreJson
            });
          }

          f();
  }

  render() {
    return (
      <div>

        <Navbar />
        
        <div className="row">
              <Filter handleFilter={this.setFilter} selectedFilter={this.state.selectedFilter} genreData={this.state.genre}/>
              
              <div class="col-9 p-5">
                   <Search totalMovies={this.state.movies.length} />
                   <Table deleteMovie={this.deleteMovie} toggleHeart = {this.toggleLike} selectedFilter={this.state.selectedFilter} moviesData={this.state.movies}/>
                   
              </div>
        </div>
      </div>
    );
  }
}

export default App;