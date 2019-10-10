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

  console.log(activeSort)
  let sortedConcerts = concerts.slice()

  function compare(a, b) {
    let comparison = 0;
    if (a.artist > b.artist) {
      comparison = 1;
    } else if (a.artist < b.artist) {
      comparison = -1;
    }
    return comparison;
  }
  sortedConcerts.sort(compare)
  
  console.log(getSortedConcerts(activeSort))

 function getSortedConcerts (activeSort) {
   if (activeSort === 'Latest added') {
     sortedConcerts = concerts
     return sortedConcerts
   }
   if (activeSort === 'Date') {
     sortedConcerts = sortedConcerts.sort((a, b) => new Date(a.fullDate) - new Date(b.fullDate))
     return sortedConcerts
   }
   if (activeSort === 'Name of Artist') {
      function compare(a, b) {
       let comparison = 0;
       if (a.artist > b.artist) {
         comparison = 1;
       } else if (a.artist < b.artist) {
         comparison = -1;
       }
       return comparison;
     }
   sortedConcerts = sortedConcerts.sort(compare)
   
   }
  }

  
  return (
    <MainStyled>
      <FilterBar genres={genres} 
      onClick={onSelectGenre}
      selectedGenre={selectedGenre}/>

      <SortBar
      handleRadioInputChange={setActiveSort}></SortBar>

      <ConcertList concerts={sortedConcerts} 
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