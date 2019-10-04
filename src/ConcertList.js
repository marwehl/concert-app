import React from 'react'
import Concert from './Concert'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function ConcertList({ concerts, onHeartClick }) {

ConcertList.propTypes = {
  concerts: PropTypes.arrayOf(PropTypes.object),
  onHeartClick: PropTypes.func
}

  return (
    <ConcertListStyled>
      {concerts.map((concert) => (
        <Concert {...concert} key={concert._id}
        onHeartClick={() => onHeartClick(concert)}/>
        ))}
    </ConcertListStyled>
  )
}


const ConcertListStyled = styled.section`
  display: grid;
  align-content: flex-start;
  gap: 30px;
  background-color: white;
  overflow-y: scroll;
  padding: 20px;
`