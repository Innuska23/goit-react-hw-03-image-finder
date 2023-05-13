import { Component } from 'react';

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './ImageGallery/ImageGalleryItem/Modal/Modal';
export class App extends Component {
  state = {
    modalImg: {
      largeImageURL: '',
      tags: '',
    },
    searchQuery: '',
    isShowModal: false,
  };

  handlerSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  hideModal = () => {
    this.setState({ isShowModal: false })
  }

  showModal = ({ largeImageURL, tags }) => {
    this.setState({ modalImg: { largeImageURL, tags }, isShowModal: true });
  }

  render() {
    const { modalImg, isShowModal, } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handlerSubmit} />
        <ImageGallery searchQuery={this.state.searchQuery} showModal={this.showModal} />
        {isShowModal && <Modal imgData={modalImg} onClose={this.hideModal} />}
      </div>
    );
  };
};