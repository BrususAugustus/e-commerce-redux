import React from 'react';

import './custom-buttom.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button ${inverted ? 'inverted' : ''}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
