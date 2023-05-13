import PropTypes from 'prop-types';
import { ItemGallery, ImageGallery } from './ImageGalleryItem.styled';

const GalleryItem = ({ webformatURL, tags, largeImageURL, openModal }) => (
    <ItemGallery>
        <ImageGallery
            src={webformatURL}
            alt={tags}
            onClick={() => openModal(largeImageURL, tags)}

        />
    </ItemGallery>
);

GalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
};

export default GalleryItem;