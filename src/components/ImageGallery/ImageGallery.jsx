import { Component } from 'react';

import GalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { Item, Wrap, Text } from './ImageGallery.styled';
import Loader from './ImageGalleryItem/Loader/Loader';

import getImages from '../services/api'
import LoadMoreBtn from './ImageGalleryItem/Button/Button';

export class ImageGallery extends Component {
  state = {
    imageList: [],
    totalPage: 0,
    error: null,
    status: 'idle',
    page: 1,
    largeImageURL: '',
    tags: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevProps.searchQuery;
    const nextSearchQuery = this.props.searchQuery;
    const prevPage = prevState.page;
    const currentPage = this.state.page;

    const isNewSearchQuery = prevSearchQuery !== nextSearchQuery;

    if (isNewSearchQuery) {
      this.setState({ imageList: [], page: 1 });
    }

    if (isNewSearchQuery || prevPage !== currentPage) {
      const requestPage= isNewSearchQuery ? 1 : currentPage;

      if (this.state.status === 'pending') return 

      this.setState({ status: 'pending' });

      getImages(nextSearchQuery, requestPage)
        .then(data => this.setState((currentState) => ({
          imageList: currentState.imageList.concat(data.hits),
          totalPage: data.totalPage,
          status: 'resolved'
        })))
        .catch(error => this.setState({ error, status: 'rejected' }))
    }
  }

  handlerBtnClick = (e) => {
    const { page } = this.state;
    this.setState({
      page: page + 1,
    });
  };

  render() {
    const {
      imageList,
      error,
      status,
      page,
      totalPage
    } = this.state;

    if (status === 'idle') {
      return <Text>Enter a search query</Text>;
    }

    if (status === 'pending' && imageList.length === 0) {
      return <Loader visible />;
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    return (
      <Wrap>
        {imageList.length === 0 && <Text>Nothing was found for this query</Text>}
        <Item>
          {imageList.map(({ id, webformatURL, tags, largeImageURL }) => (
            <GalleryItem
              key={id}
              webformatURL={webformatURL}
              tags={tags}
              largeImageURL={largeImageURL}
              openModal={() => this.props.showModal({ largeImageURL, tags })} />
          ))}
        </Item>

        {page < totalPage && <LoadMoreBtn isLoading={status === 'pending'} onClick={this.handlerBtnClick} />}
      </Wrap>
    );
  }
};

export default ImageGallery;