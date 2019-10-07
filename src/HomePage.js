import React from 'react'
import styled from 'styled-components/macro';
import PropTypes from 'prop-types'
import FilterBar from './FilterBar'
import ConcertList from './ConcertList'

HomePage.propTypes = {
  concerts: PropTypes.arrayOf(PropTypes.object),
  onHeartClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  onEditClick: PropTypes.func,
  genres: PropTypes.arrayOf(PropTypes.string),
  onSelectGenre: PropTypes.func
}

export default function HomePage({concerts, onHeartClick, genres, onSelectGenre, onDeleteClick}) {
  return (
    <MainStyled>
      <FilterBar genres={genres} 
      onClick={onSelectGenre}/>
      <ConcertList concerts={concerts} 
      onHeartClick={onHeartClick}
      onDeleteClick={onDeleteClick}
  />
    </MainStyled>
  )
}

const MainStyled = styled.main`
display: grid;
grid-template-rows: 38px auto;
overflow-y: scroll;
`