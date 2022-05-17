import React from 'react';
import * as S from './Section.style';

function Section({ children }) {
  return (
    <S.Section>
      <S.Spacing>{children}</S.Spacing>
    </S.Section>
  );
}

export default Section;
