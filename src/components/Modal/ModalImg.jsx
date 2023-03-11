import PropTypes from 'prop-types';

const ModalImg = ({ largeImageURL, alt }) => {
  return (
    <>
      <img src={largeImageURL} alt={alt} />
    </>
  );
};

export default ModalImg;

ModalImg.propTypes = {
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
