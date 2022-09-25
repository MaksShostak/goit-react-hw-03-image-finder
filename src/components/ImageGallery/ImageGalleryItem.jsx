import React from 'react';
import PropTypes from 'prop-types';

import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ responceObj, openModal }) => {
  return (
    <li
      className={style.galleryItem}
      onClick={() => {
        openModal(responceObj);
      }}
    >
      <img src={responceObj.webformatURL} alt={responceObj.tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  responceObj: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
