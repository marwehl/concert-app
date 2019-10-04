import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import FilterButton from './FilterButton'
import { KeyboardArrowLeft } from 'styled-icons/material/KeyboardArrowLeft'

export default function FilterBar ({onClick, genres }) {

FilterBar.propTypes = {
genres: PropTypes.arrayOf(PropTypes.string),
onClick: PropTypes.func
}

  return (
    <FilterBarStyled>
      <KeyboardArrowLeftStyled></KeyboardArrowLeftStyled>
    <FilterButton onClick={() => onClick('all')} key={'all'} text='All'></FilterButton>
    {genres.map(genre => <FilterButton onClick={() => onClick(genre)} key={genre} text={genre}></FilterButton>)}
    </FilterBarStyled>
  )

}

const FilterBarStyled = styled.section`
position: relative;
 display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none; 
    scrollbar-width: none;
  scroll-snap-type: x mandatory;
  width: 100%;
  height: 38px;
  margin: auto;
`
const KeyboardArrowLeftStyled = styled(KeyboardArrowLeft)`
position: absolute;
width: 28px;
`