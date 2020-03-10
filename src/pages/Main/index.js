import React, { Component } from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import api from '../../services/api';
// Modulo de ícones famosos
import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    newRepo: '',
    repositories: [],
  };

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    // evitar que o formulario faça refresh na pagina
    e.preventDefault();

    const { newRepo, repositories } = this.state;

    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
    });
  };

  render() {
    const { newRepo } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositories
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Repository Name"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton>
            <FaPlus />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
