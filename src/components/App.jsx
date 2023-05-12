import { Component } from 'react';

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './ImageGallery/ImageGalleryItem/Modal/Modal';
export class App extends Component {
  state = {
    searchQuery: '',
    modalImg: '',
    showModal: false,
  };

  handlerSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }))
  }

  getLargeImg = url => {
    this.toggleModal();
    this.setState({ modalImg: url });
  }

  render() {
    const { modalImg, showModal} = this.state;
  return (
    <div>
      <Searchbar onSubmit={this.handlerSubmit} />
      <ImageGallery searchQuery={this.state.searchQuery} />
      {showModal && <Modal url={modalImg} onClose={this.toggleModal} />}
    </div>
  );
};
};