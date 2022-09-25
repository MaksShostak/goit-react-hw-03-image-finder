import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ value, modalOpen }) => {
  return (
    <ul className="gallery">
      {value.map(picture => (
        <ImageGalleryItem
          key={picture.id}
          responceObj={picture}
          openModal={modalOpen}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired
  ),
  modalOpen: PropTypes.func.isRequired,
};

export default ImageGallery;
