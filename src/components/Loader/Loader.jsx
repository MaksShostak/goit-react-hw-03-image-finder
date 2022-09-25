import { ColorRing } from 'react-loader-spinner';
import React from 'react';

export const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '30px' }}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};
