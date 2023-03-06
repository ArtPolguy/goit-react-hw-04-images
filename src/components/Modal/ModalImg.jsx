import PropTypes from 'prop-types';

const ModalImg = ({ largeImageURL, tags }) => {
  return (
    <>
      <img src={largeImageURL} alt={tags} />
    </>
  );
};

export default ModalImg;

ModalImg.propTypes = {
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
