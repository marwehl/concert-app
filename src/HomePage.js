import React from 'react'
import styled from 'styled-components/macro';
import PropTypes from 'prop-types'
import FilterBar from './FilterBar'
import ConcertList from './ConcertList'

HomePage.propTypes = {
  concerts: PropTypes.arrayOf(PropTypes.string),
  onHeartClick: PropTypes.func,
  genres: PropTypes.arrayOf(PropTypes.string),
  onSelectGenre: PropTypes.func
}

export default function HomePage({concerts, onHeartClick, genres, onSelectGenre}) {
  return (
    <MainStyled>
      <FilterBar genres={genres} onClick={onSelectGenre}/>
      <ConcertList concerts={concerts} onHeartClick={onHeartClick}/>
    </MainStyled>
  )
}

const MainStyled = styled.main`
display: grid;
grid-template-rows: 38px auto;
overflow-y: scroll;
`