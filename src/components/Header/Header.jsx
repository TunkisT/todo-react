import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.style';

function Header({ data }) {
  return (
    <S.Header>
      <h2>ToDo app</h2>
      <S.Navigation>
        {data.map((obj) => (
          <S.Link key={obj.title} to={obj.link}>
            {obj.title}
          </S.Link>
        ))}
      </S.Navigation>
    </S.Header>
  );
}

Header.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Header;
