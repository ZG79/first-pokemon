import React from "react";
import { Card, Button } from 'react-bootstrap';
import PostForm from "./PostForm";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      name: '',
      image: '',
      showModal: false,
      searchName: '',
      searchNumber: ''
    };
  }

  componentDidMount() {
    this.fetchPokemonName();
  }

  fetchPokemonName = (name, number) => {
    const randomNum = number ? parseInt(number) : this.randomNumber();
    const apiUrl = name ? `https://pokeapi.co/api/v2/pokemon/${name}` : `https://pokeapi.co/api/v2/pokemon/${randomNum}`;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.name) {
          this.setState({
            number: data.id,
            name: data.name,
            image: data.sprites.other['official-artwork'].front_default
          });
        }
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }

  randomNumber = () => {
    const min = 1;
    const max = 151;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  handleClick = (e) => {
    e.preventDefault();
    this.fetchPokemonName();
  }

  handleOpen = () => {
    this.setState({ showModal: true })
  }

  handleClose = () => {
    this.setState({ showModal: false })
  }

  handleSearch = (name, number) => {
    this.setState({
      searchName: name,
      searchNumber: number
    }, () => {
      this.fetchPokemonName(name, number);
    });
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleOpen}>Pokemon Finder</Button>
        {this.state.name && this.state.name.length > 0 && (
          <Card style={{ width: 'fit-content' }}>
            <Card.Title>{this.state.name}</Card.Title>
            <Card.Text>#{this.state.number}</Card.Text>
            <img className="pokemon_img" alt="pokemon" src={this.state.image} />
            <Button variant="primary" type="submit" onClick={this.handleClick}>Give me a different Pokémon</Button>
          </Card>
        )}
        <PostForm
          postPoke={this.handleSearch}
          showModal={this.state.showModal}
          hideModal={this.handleClose}
        />
      </>
    );
  }
}

export default Pokemon;
