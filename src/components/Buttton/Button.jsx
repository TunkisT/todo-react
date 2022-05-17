import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

function Button({ children, type }) {
  return <S.Button type={type}>{children}</S.Button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['submit', 'button']),
};

export default Button;
