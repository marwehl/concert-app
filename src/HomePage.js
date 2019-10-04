import React from 'react'
import styled from 'styled-components/macro';
import PropTypes from 'prop-types'
import FilterBar from './FilterBar'
import ConcertList from './ConcertList'

export default function HomePage({concerts, toggleIsFavorite, genres, onSelectGenre}) {
  return (
    <MainStyled>
      <FilterBar genres={genres} onClick={onSelectGenre}/>
      <ConcertList concerts={concerts} toggleIsFavorite={toggleIsFavorite}/>
    </MainStyled>
  )
}

const MainStyled = styled.main`
display: grid;
grid-template-rows: 38px auto;
overflow-y: scroll;
`