import React from "react";
// import PokeInfo from './data.json';
import './pokemon.css';
import {Card, Button} from 'react-bootstrap';

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
     let pokeNum = Math.floor(Math.random() * (max - min + 1)) + min;
     this.setState({name:pokeNum})
     return pokeNum;
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.randomNumber()}.png`})
    
  }

  render(){
    return(
      
      <Card style={{ width: 'fit-content' }}>
        <Card.Title>{this.state.name}</Card.Title>
      <img className="pokemon_img" alt="pokemon" src={this.state.image} />
      <Button variant="primary" type="submit" onClick={this.handleClick}> Give me different Pokemon</Button>
      </Card>
    )
  }

}

export default Pokemon; 