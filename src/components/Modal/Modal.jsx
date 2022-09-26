import { Component } from 'react';
import PropTypes from 'prop-types';

import style from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.modalClose();
    }
  };

  handleBackDropClose = event => {
    if (event.currentTarget === event.target) {
      this.props.modalClose();
    }
  };
  render() {
    const { modalimg } = this.props;

    return (
      <div className={style.overlay} onClick={this.handleBackDropClose}>
        <div className={style.modal}>
          <img src={modalimg.largeImageURL} alt={modalimg.tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modalClose: PropTypes.func.isRequired,
  modalimg: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

export default Modal;
