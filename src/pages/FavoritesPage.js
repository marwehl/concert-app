import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from "prop-types";
import ConcertList from '../concert/ConcertList'

 FavoritesPage.propTypes = {
   concerts: PropTypes.arrayOf(PropTypes.object),
   onHeartClick: PropTypes.func,
   currentUser: PropTypes.object
 };

export default function FavoritesPage ({concerts, onHeartClick, currentUser}) {

  return (
      <FavoritesPageStyled>
        <HeadlineStyled>{currentUser.username}s Concerts</HeadlineStyled>
        <ConcertList
          concerts={concerts}
          onHeartClick={onHeartClick}
          currentUser={currentUser}
        />
      </FavoritesPageStyled>
  );
}

const FavoritesPageStyled = styled.section`
padding: 15px;
display: grid;
grid-template-rows: 48px auto;
overflow-y: scroll;
  -ms-overflow-style: none; 
   scrollbar-width: none;
`
const HeadlineStyled = styled.span`
text-align: center;
font-size: 1.5em;
font-weight: bold;
`