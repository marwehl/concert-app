import React from 'react'
import Concert from './Concert'
import styled from 'styled-components/macro'

export default function ConcertList({ concerts }) {
  return (
    <ConcertListStyled>
      {concerts.map(concert => (
        <Concert artist={concert.artist} date={concert.date} place={concert.place} styles={concert.styles}
        image={concert.image}/>
        ))}
    </ConcertListStyled>
  )
}


const ConcertListStyled = styled.main`
  padding: 20px;
  display: grid;
  align-content: flex-start;
  gap: 20px;
  background-color: #dbdfec;
`