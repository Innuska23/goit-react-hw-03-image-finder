import { Component } from 'react';

import GalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { BASE_PIXABAY_URL, DEFAULT_SEARCH_PARAM } from '../services/constans';
import { Item, Wrap } from './ImageGallery.styled';

export class ImageGallery extends Component {
    state = {
    data: {},
    error: null,
    status: 'idle',
    };

    componentDidUpdate(prevProps, prevState) {
        const prevSearchQuery = prevProps.searchQuery;
        const nextSearchQuery = this.props.searchQuery;

        const requestParam = DEFAULT_SEARCH_PARAM;
        const searchParams = new URLSearchParams(requestParam);
    
        if (prevSearchQuery !== nextSearchQuery) {
          this.setState({ status: 'pending' });
    
          fetch(
            `${BASE_PIXABAY_URL}?${searchParams}`
          )
            .then(response => {
              if (response.ok) {
                return response.json();
              }
              return Promise.reject(
                new Error('Error')
              );
            })
            .then(data => this.setState({ data, status: 'resolved' }))
            .catch(error => this.setState({ error, status: 'rejected' }));
        }
      }
    
      btnClickHandler = event => {
        console.log(event);
      };
    
      render() {
        const {
          data: { hits },
          error,
          status,
        } = this.state;
    
        if (status === 'idle') {
          return <div>Enter a search query</div>;
        }
    
        if (status === 'pending') {
        //   return <Spinner/>;
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
              {/* {hits.length !== 0 && <LoadMoreBtn onClick={this.btnClickHandler} />} */}
            </Wrap>
          );
        }
      }
    };

export default ImageGallery;