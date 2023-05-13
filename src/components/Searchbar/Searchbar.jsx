import { Component } from 'react';
import PropTypes from 'prop-types';

import { Header, Form, Button, Input, StyledSvg} from './Searchbar.styled';

// import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'

class Searchbar extends Component {
  state = {
    value: '',
  };

  onReset = () => this.setState({ value: '' });

  handlerSubmit = e => {
    const word = e.target.elements[1].value.trim();

    e.preventDefault();
    if (word) this.props.onSubmit(word);
  };

  onChange = e => this.setState({ value: e.target.value });

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