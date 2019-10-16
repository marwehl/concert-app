import React from 'react'
import styled from 'styled-components/macro'
import ConcertList from '../concert/ConcertList'

export default function FavoritesPage ({concerts, onHeartClick}) {
  return (
    <FavoritesPageStyled>
      <ConcertList concerts={concerts} onHeartClick={onHeartClick} />
    </FavoritesPageStyled>
  );
}


const FavoritesPageStyled = styled.main`
padding: 15px;
display: grid;
grid-gap: 10px;
overflow-y: scroll;
  -ms-overflow-style: none; 
    scrollbar-width: none;
`