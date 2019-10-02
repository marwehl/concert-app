import React from 'react'
import Concert from './Concert'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function ConcertList({ concerts, toggleIsFavorite }) {

ConcertList.propTypes = {
  concerts: PropTypes.arrayOf(PropTypes.object)
}

  return (
    <ConcertListStyled>
      {concerts.map((concert, index) => (
        <Concert {...concert} key={index}
        toggleIsFavorite={() => toggleIsFavorite(index)}/>
        ))}
    </ConcertListStyled>
  )

}


const ConcertListStyled = styled.main`
  padding: 20px;
  display: grid;
  align-content: flex-start;
  gap: 40px;
  background-color: #dbdfec;
`