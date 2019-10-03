import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import FilterButton from './FilterButton'

export default function FilterBar ({onClick, genres }) {

FilterBar.propTypes = {
genres: PropTypes.arrayOf(PropTypes.string),
onClick: PropTypes.func
}

  return (
    <FilterBarStyled>
    <FilterButton onClick={() => onClick('all')} key={'all'} text='All'></FilterButton>
    {genres.map(genre => <FilterButton onClick={() => onClick(genre)} key={genre} text={genre}></FilterButton>)}
    </FilterBarStyled>
  )

}

const FilterBarStyled = styled.section`
 display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none; 
    scrollbar-width: none;
  scroll-snap-type: x mandatory;
  width: 100%;
  height: 48px;
  margin: auto;
`
