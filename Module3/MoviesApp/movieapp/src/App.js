import React from "react";

class App extends React.Component {
  
  componentDidMount(){
      // I will get data here
      // we are in context of FrontEnd side => all Browsers exposed some functionalities like fetch()
      // fetch() => which takes the link of file/API jha se data mangvaana hai
      // fetch() is a async function
      let f = async () => {
          let result = fetch("./data.json");
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