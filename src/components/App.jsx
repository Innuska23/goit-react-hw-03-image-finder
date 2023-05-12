import { Component } from 'react';
// import * as API from '../services/api';

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from './ImageGallery/ImageGallery';
export class App extends Component {
  state = {
    searchQuery: '',
  };

  handlerSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      {/* React homework template */}
      <Searchbar onSubmit={this.handlerSubmit} />
      <ImageGallery searchQuery={this.state.searchQuery} />
    </div>
  );
};
};