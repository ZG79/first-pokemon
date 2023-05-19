import React from "react";
// import PokeInfo from './data.json'
import { Button, Card } from "react-bootstrap";

class Pokemon extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      image: '',
      skill: ''

    }
    // this.resetStates = this.resetStates.bind(this);
  }

   randomNumber = (min, max) => {
     min = 1;
     max = 151;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.randomNumber()}.png`})
  }

  render(){
    return(
      <>
      <img alt="pokemon" src={this.state.image} />
      <Button onClick={this.handleClick}> Give me different Pokemon</Button>
      </>
    )
  }

}

export default Pokemon; 