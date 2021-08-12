import React from "react";

class App extends React.Component {
  
  componentDidMount(){ // data ek baar hi laana hai to hum data compDidMount() mein likhenge
      // I will get data here
      // we are in context of FrontEnd side => all Browsers exposed some functionalities like fetch()
      // fetch() => which takes the link of file/API jha se data mangvaana hai
      // fetch() is a async function
      let f = async () => {
          // let result = await fetch("http://localhost:4000/movies"); //API link jha se data fetch karna hai
          let result = await fetch("/movies");
          console.log(result); // result contains bhot saari chise,one of them is json data call by.json() which fetch function provides us

          let json = await result.json();
          console.log(json);
      }

      f();
  }

  render() {
    return (
        <div></div>
    );
  }
}

export default App;