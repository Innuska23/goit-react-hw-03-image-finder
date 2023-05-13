import { Component } from 'react';

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './ImageGallery/ImageGalleryItem/Modal/Modal';
export class App extends Component {
  state = {
    searchQuery: '',
    modalImg: '',
    isShowModal: false,
    largeImageURL: '',
    tags: '',
  };

  handlerSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  toggleModal = () => {
    this.setState(({ isShowModal }) => ({ isShowModal: !isShowModal }))
  }

  getLargeImg = url => {
    this.toggleModal();
    this.setState({ modalImg: url });
  }

  showModal = (url) => {
    this.setState({largeImageURL: url, isShowModal: true});
  }

  render() {
    const { modalImg, isShowModal, largeImageURL, tags} = this.state;
  return (
    <div>
      <Searchbar onSubmit={this.handlerSubmit} />
      <ImageGallery searchQuery={this.state.searchQuery} showModal={this.showModal}/>
      {isShowModal && <Modal url={modalImg} src={largeImageURL} alt={tags} onClose={this.toggleModal} />}
    </div>
  );
};
};