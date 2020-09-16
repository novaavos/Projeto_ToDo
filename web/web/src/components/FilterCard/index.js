import React from 'react';
import * as S from './styles';

import filter from '../../Assets/filter.png';

function FilterCard({title, active}) {
  return (
    <S.Container active={active}>
      <img src={ filter } alt="Filtro"/>
      <span>{title}</span>
    </S.Container>
  )
}

export default FilterCard;