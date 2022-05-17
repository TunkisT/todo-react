import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.style';

function Header({ data }) {
  return (
    <S.Header>
      <h2>ToDo app</h2>
      <S.Navigation>
        {data.map((obj) => (
          <S.Link href={obj.link}>{obj.title}</S.Link>
        ))}
      </S.Navigation>
    </S.Header>
  );
}

Header.propTypes = {};

export default Header;
