import React, { useState }from 'react'
import styled from 'styled-components/macro';
import PropTypes from 'prop-types'
import FilterBar from '../genrefilter/FilterBar'
import ConcertList from '../concert/ConcertList'
import SortBar from '../SortBar'
import PopUpDelete from '../PopUpDelete'


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
  const [showPopup, setShowPopup] = useState(false);
  const [deleteConcert, setDeleteConcert] = useState({});

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  function handleDeleteClick(concert) {
    setDeleteConcert(concert)
    togglePopup();
  }

  return (
    <>
      <MainStyled>
        <FilterBar
          genres={genres}
          onClick={onSelectGenre}
          selectedGenre={selectedGenre}
        />

        <SortBar handleRadioInputChange={setActiveSort}></SortBar>

        <ConcertList
          concerts={getSortedConcerts(concerts, activeSort)}
          onHeartClick={onHeartClick}
          onDeleteClick={handleDeleteClick}
        />
      </MainStyled>
      {showPopup && (
        <PopupStyled onClick={togglePopup}>
          <PopupInnerStyled>
            <PopUpDelete
              onYesDeleteClick={() => onDeleteClick(deleteConcert)}
              onNotDeleteClick={togglePopup}
            />
          </PopupInnerStyled>
        </PopupStyled>
      )}
    </>
  );
}

const MainStyled = styled.main`
padding: 15px;
display: grid;
grid-gap: 10px;
grid-template-rows: 42px 42px auto;
overflow-y: scroll;
  -ms-overflow-style: none; 
    scrollbar-width: none;
`
const PopupStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;

const PopupInnerStyled = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 30%;
  margin: auto;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;


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
 