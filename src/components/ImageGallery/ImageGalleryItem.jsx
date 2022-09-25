import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ responceObj, openModal }) => {
  return (
    <li
      className="gallery-item"
      onClick={() => {
        openModal(responceObj.largeImageURL);
      }}
    >
      <img src={responceObj.webformatURL} alt={responceObj.tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  responceObj: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
