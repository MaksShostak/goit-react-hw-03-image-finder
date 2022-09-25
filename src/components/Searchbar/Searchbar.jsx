import { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };
  // handleSubmit(e) {
  //   e.preventDefault;
  // }

  render() {
    const { onSubmit, inSubmiting } = this.props;
    return (
      <header className="searchbar">
        <form className="form" onSubmit={onSubmit}>
          <button type="submit" className="button" disabled={inSubmiting}>
            <span className="button-label">Search</span>
          </button>

          <input
            // value={}
            name="input"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  inSubmiting: PropTypes.bool.isRequired,
};

export default Searchbar;
