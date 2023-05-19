import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

//React component is the parent, getting all the components from react component
class App extends React.Component{
  render(){
    return(
      <>
      <Header/>
      <Main/>
      Hello World
      <Footer/>
    </>
    )
  }
}

export default App; 