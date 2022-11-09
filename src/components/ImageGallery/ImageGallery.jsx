import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, openModal }) => {
 return (
  <Gallery >
    {images.map(({ id, webformatURL, tags, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        alt={tags}
        largeImageURL={largeImageURL}
        openModal={openModal}
        />
      ))}
  </Gallery>)
}  

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
     
    }),
  ),
  openModal: PropTypes.func.isRequired,
}
    
    
    
   