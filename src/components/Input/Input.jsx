import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.style';

function Input({ name, labeltext, type, placeholder }) {
  return (
    <>
      <S.Label htmlFor={name}>{labeltext}</S.Label>
      <S.Input type={type} id={name} placeholder={placeholder} />
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired,
  placeholder: PropTypes.node.isRequired,
};

export default Input;
