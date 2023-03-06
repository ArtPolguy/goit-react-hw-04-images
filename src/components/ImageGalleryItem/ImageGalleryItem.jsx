import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImgGalleryItem = ({ largeImageURL, onClick, url, alt }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={url}
        alt={alt}
        onClick={() => onClick({ largeImageURL, alt })}
      />
    </li>
  );
};

export default ImgGalleryItem;

ImgGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
