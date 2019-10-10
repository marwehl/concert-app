import React from 'react'
import styled from 'styled-components/macro';
import PropTypes from 'prop-types'
import FilterBar from './genrefilter/FilterBar'
import ConcertList from './concert/ConcertList'

HomePage.propTypes = {
  concerts: PropTypes.arrayOf(PropTypes.object),
  onHeartClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  onEditClick: PropTypes.func,
  genres: PropTypes.arrayOf(PropTypes.string),
  onSelectGenre: PropTypes.func
}

export default function HomePage({concerts, onHeartClick, genres, onSelectGenre, onDeleteClick, selectedGenre}) {
  return (
    <MainStyled>
      <FilterBar genres={genres} 
      onClick={onSelectGenre}
      selectedGenre={selectedGenre}/>
      <ConcertList concerts={concerts} 
      onHeartClick={onHeartClick}
      onDeleteClick={onDeleteClick}
  />
    </MainStyled>
  )
}

const MainStyled = styled.main`
display: grid;
grid-template-rows: 42px auto;
overflow-y: scroll;
  -ms-overflow-style: none; 
    scrollbar-width: none;
`