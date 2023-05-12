import { Component } from 'react';
import PropTypes from 'prop-types';

import { Header, Form, Button, Input  } from './Searchbar.styled';

class Searchbar extends Component {
    state = {
      value: '',
    };
  
    onReset = () => this.setState({ value: '' });
  
    handlerSubmit = e => {
      e.preventDefault();
      this.setState({ value: '' });
      const word = e.target.elements[1].value.trim();
      if (word) this.props.onSubmit(word);
    };
  
    onChange = e => this.setState({ value: e.target.value });
  
    render() {
      const { value } = this.state;
      return (
        <Header>
          <Form onSubmit={this.handlerSubmit}>
            <Button type="submit" disabled={this.props.isDisabled}>
              {/* <FaSearch size={20} className="icon" /> */}
            </Button>
  
            <Input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.onChange}
              value={value}
            />
  
            <Button onClick={this.onReset} type="reset">
              {/* <FaRegWindowClose
                className="icon"
                size={20}
                color={value ? 'red' : 'transparent'}
              /> */}
            </Button>
          </Form>
        </Header>
      );
    }
  }
  
  Searchbar.propTypes = {
    // isDisabled: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };
  
  export default Searchbar;