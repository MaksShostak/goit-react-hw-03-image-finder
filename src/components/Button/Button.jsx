import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const ButtonBootstrap = props => {
  return (
    <div style={{ textAlign: 'center', margin: '30px' }}>
      <Button onClick={props.onClick} variant="outline-success" size="lg">
        Load more
      </Button>
    </div>
  );
};

ButtonBootstrap.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonBootstrap;
