import ImgGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, showModalImg }) => {
  const items = images.map(({ id, webformatURL, tags, largeImageURL }) => (
    <ImgGalleryItem
      key={id}
      url={webformatURL}
      alt={tags}
      largeImageURL={largeImageURL}
      onClick={showModalImg}
    />
  ));
  return <ul className={css.imageGallery}>{items}</ul>;
};

export default ImageGallery;

ImageGallery.defaultProps = {
  images: [],
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};
