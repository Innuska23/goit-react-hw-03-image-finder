import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

import { Header, Form, Button, Input, StyledSvg} from './Searchbar.styled';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handlerSubmit = e => {
    e.preventDefault();

    if (this.state.value.trim() === '') {
      toast("What are you searching for?");
      return;
  };
  this.props.onSubmit(this.state.value);
  this.setState({ value: '' });
}

  onChange = event => {
    this.setState({ value: event.currentTarget.value.toLowerCase() })
}

  render() {
    const { value } = this.state;
    return (
      <Header>
        <Form onSubmit={this.handlerSubmit}>
          <Button type="submit">
            <StyledSvg />
          </Button>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChange}
            value={value}
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;