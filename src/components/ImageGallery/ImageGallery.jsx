import { Component } from 'react';

import GalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { Item, Wrap } from './ImageGallery.styled';
import Loader from './ImageGalleryItem/Loader/Loader';

import getImages from '../services/api'
import LoadMoreBtn from './ImageGalleryItem/Button/Button';

export class ImageGallery extends Component {
    state = {
    data: {},
    error: null,
    status: 'i}dle',
    isLoading: false,
    };

    componentDidUpdate(prevProps, prevState) {
        const prevSearchQuery = prevProps.searchQuery;
        const nextSearchQuery = this.props.searchQuery;
    
        if (prevSearchQuery !== nextSearchQuery) {
          this.setState({ status: 'pending' });
    
            getImages(nextSearchQuery)
            .then(data => this.setState({ data, status: 'resolved' }))
            .catch(error => this.setState({ error, status: 'rejected' }));
        }
      }
    
      handlerBtnClick = event => {
        this.requestToApi(this.state.word, this.state.gallery);
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
              {hits.length !== 0 && <LoadMoreBtn isDisabled={isLoading} onClick={this.handlerBtnClick } />}
            </Wrap>
          );
        }
      }
    };

export default ImageGallery;