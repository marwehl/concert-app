import React, { useState }from 'react'
import styled from 'styled-components/macro';
import PropTypes from 'prop-types'
import FilterBar from '../genrefilter/FilterBar'
import ConcertList from '../concert/ConcertList'
import SortBar from '../sortbar/SortBar'
import PopUpDelete from '../concert/PopUpDelete'
import { getSortedConcerts } from '../concert/utils.concerts.js'


HomePage.propTypes = {
  concerts: PropTypes.arrayOf(PropTypes.object),
  onHeartClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  onEditClick: PropTypes.func,
  genres: PropTypes.arrayOf(PropTypes.string),
  onSelectGenre: PropTypes.func,
  selectedGenre: PropTypes.string,
  currentUser: PropTypes.object
}

export default function HomePage({concerts, onHeartClick, genres, onSelectGenre, onDeleteClick, onEditClick, selectedGenre, currentUser}) {
  
  const [activeSort, setActiveSort] = useState('Latest added')
  const [showPopup, setShowPopup] = useState(false);
  const [deleteConcert, setDeleteConcert] = useState({});

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
          onEditClick={onEditClick}
          onDeleteClick={handleDeleteClick}
          currentUser={currentUser}
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

   function togglePopup() {
     setShowPopup(!showPopup);
   }

   function handleDeleteClick(concert) {
     setDeleteConcert(concert);
     togglePopup();
   }
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
  width: 375px;
  height: 667px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 59px auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;

const PopupInnerStyled = styled.div`
  position: absolute;
  left: 10%;
  right: 10%;
  top: 30%;
  margin: auto;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

 