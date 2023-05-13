import { Component } from 'react';

import GalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { Item, Wrap } from './ImageGallery.styled';
import Loader from './ImageGalleryItem/Loader/Loader';
// import axios from 'axios';

import getImages from '../services/api'
import LoadMoreBtn from './ImageGalleryItem/Button/Button';

export class ImageGallery extends Component {
    state = {
    data: { 
      hits: []
    },
    error: null,
    status: 'i}dle',
    isLoading: false,
    page: 1,
    };

    componentDidUpdate(prevProps, prevState) {
        const prevSearchQuery = prevProps.searchQuery;
        const nextSearchQuery = this.props.searchQuery;
        const prevPage = prevState.page;
        const currentPage = this.state.page;
    
        if (prevSearchQuery !== nextSearchQuery ||  prevPage !== currentPage) {
          this.setState({ status: 'pending' });
    
            getImages(nextSearchQuery, currentPage)
            .then(data => this.setState((currentState) => ({data: {hits:currentState.data.hits.concat(data.hits)}, status: 'resolved'})))
            .catch(error => this.setState({ error, status: 'rejected' }))
        }
      }

      handlerBtnClick = (e) => {
        e.preventDefault();
        const { page } = this.state;
        this.setState({
          page: page + 1,
        });
  };
    
      render() {
        const {
          data: { hits },
          error,
          status,
          isLoading
        } = this.state;
        if (status === 'idle') {
          return <div>Enter a search query</div>;
        }
    
        if (status === 'pending') {
          return <Loader visible={isLoading}/>;
        }
    
        if (status === 'rejected') {
          return <h1>{error.message}</h1>;
        }
        
        if (status === 'resolved') {

          return (
            <Wrap>
              <Item>
                {hits.length === 0 && <p>Nothing was found for this query</p>}
                {hits.map(({ id, webformatURL, tags }) => (
                  <GalleryItem key={id} webformatURL={webformatURL} tags={tags} />
                ))}
              </Item>
              {hits.length >= 12 && <LoadMoreBtn isDisabled={isLoading} onClick={this.handlerBtnClick} />}
            </Wrap>
          );
        }
      }
    };

export default ImageGallery;