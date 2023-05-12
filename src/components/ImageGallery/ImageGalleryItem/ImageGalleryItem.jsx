import PropTypes from 'prop-types';
import {ItemGallery, ImageGallery } from './ImageGalleryItem.styled';

const GalleryItem = ({ webformatURL, tags}) => (
    <ItemGallery>
        <ImageGallery
        src={webformatURL}
        alt={tags} />
    </ItemGallery>
);

GalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
};

export default GalleryItem;