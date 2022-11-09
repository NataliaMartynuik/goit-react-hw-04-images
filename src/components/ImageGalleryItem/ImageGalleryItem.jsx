import { Item, ImageItem } from './ImageGalleryItem.styled';

import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, alt, largeImageURL, openModal }) => {
 return (
    <Item onClick={() => openModal(largeImageURL)}>
      <ImageItem src={webformatURL} alt={alt}  />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  alt: PropTypes.string,
  largeImageURL: PropTypes.string.isRequired,
 };


