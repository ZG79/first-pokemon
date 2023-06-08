import React from "react";
import { Modal, Form, Container, Button } from 'react-bootstrap';

class PostForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    this.props.postPoke(name, number);
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.hideModal}>
        <Modal.Header closeButton></Modal.Header>
        <Container className="form">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name of the Pokemon</Form.Label>
              <Form.Control type="text" placeholder="What is the name of the Pokemon you're looking for?" />
            </Form.Group>
            <Form.Group controlId="number">
              <Form.Label>Number of the Pokemon</Form.Label>
              <Form.Control type="number" placeholder="What is the number of the Pokemon you're looking for?" />
            </Form.Group>
            <Button type="submit">Look for Pokemon</Button>
          </Form>
        </Container>
      </Modal>
    );
  }
}

export default PostForm;
