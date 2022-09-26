import { Component } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import style from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = event => {
    this.setState({
      inputValue: event.currentTarget.value.toLowerCase(),
    });
  };

  resetInput = () => {
    this.setState({
      inputValue: '',
    });
  };

  handleSubmit = event => {
    const { inputValue } = this.state;
    event.preventDefault();
    if (inputValue.trim() === '') {
      return Notify.warning(`Please enter a search query`, {
        backOverlay: true,
        timeout: 1500,
        position: 'center-center',
        fontSize: '34px',
        width: '500px',
        clickToClose: true,
      });
    }
    this.props.onSubmit(inputValue);
    this.resetInput();
  };
  render() {
    const { inSubmiting } = this.props;
    const { inputValue } = this.state;
    const { handleInputChange, handleSubmit } = this;
    return (
      <header className={style.searchbar}>
        <form className={style.form} onSubmit={handleSubmit}>
          <button type="submit" className={style.button} disabled={inSubmiting}>
            <span className={style.buttonLabel}>Search</span>
          </button>

          <input
            value={inputValue}
            name="input"
            className={style.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleInputChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  inSubmiting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
