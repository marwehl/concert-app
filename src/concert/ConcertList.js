import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Concert from "./Concert";

export default function ConcertList({
                 concerts,
                 onHeartClick,
                 onDeleteClick,
                 currentUser
               }) {
                 ConcertList.propTypes = {
                   concerts: PropTypes.arrayOf(PropTypes.object),
                   onHeartClick: PropTypes.func,
                   onDeleteClick: PropTypes.func
                 };
                 
                 return (
                   <ConcertListStyled>
                     {concerts.map(concert => (
                       <Concert
                         {...concert}
                         key={concert._id}
                         onHeartClick={() => onHeartClick(concert)}
                         onDeleteClick={() => onDeleteClick(concert)}
                         currentUser={currentUser}
                       />
                     ))}
                   </ConcertListStyled>
                 );

               }

const ConcertListStyled = styled.section`
 display: grid;
  align-content: flex-start;
  gap: 15px;
  background-color: white;
  overflow-y: scroll;
    -ms-overflow-style: none; 
    scrollbar-width: none;
`