import { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
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
      <div className="overlayka" onClick={this.handleBackDropClose}>
        <div className="modalca">
          <img className="modalimg" src={modalimg} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modalClose: PropTypes.func.isRequired,
  modalimg: PropTypes.string.isRequired,
};

export default Modal;
