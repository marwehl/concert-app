import React, { useState }from 'react'
import styled from 'styled-components/macro';
import PropTypes from 'prop-types'
import FilterBar from './genrefilter/FilterBar'
import ConcertList from './concert/ConcertList'
import SortBar from './SortBar'

HomePage.propTypes = {
  concerts: PropTypes.arrayOf(PropTypes.object),
  onHeartClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  onEditClick: PropTypes.func,
  genres: PropTypes.arrayOf(PropTypes.string),
  onSelectGenre: PropTypes.func
}


export default function HomePage({concerts, onHeartClick, genres, onSelectGenre, onDeleteClick, selectedGenre}) {
  
  const [activeSort, setActiveSort] = useState('Latest added')

  return (
    <MainStyled>
      <FilterBar genres={genres} 
      onClick={onSelectGenre}
      selectedGenre={selectedGenre}/>

      <SortBar
      handleRadioInputChange={setActiveSort}>
      </SortBar>

      <ConcertList concerts={getSortedConcerts(concerts, activeSort)} 
      onHeartClick={onHeartClick}
      onDeleteClick={onDeleteClick}
  />
    </MainStyled>
  )

}

const MainStyled = styled.main`
display: grid;
grid-gap: 10px;
grid-template-rows: 42px auto;
overflow-y: scroll;
  -ms-overflow-style: none; 
    scrollbar-width: none;
`


function getSortedConcerts(concerts, activeSort) {
  let sortedConcerts = concerts.slice()
 
  if (activeSort === 'Date') {
    sortedConcerts.sort((a, b) => new Date(a.fullDate) - new Date(b.fullDate))
  }
  if (activeSort === 'Name of Artist') {
    sortedConcerts.sort((a,b) => a.artist > b.artist ? 1 : -1)
  }
return sortedConcerts
}
 