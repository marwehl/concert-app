import React from 'react'
import styled from 'styled-components/macro';
import PropTypes from 'prop-types'

export default function FilterButton({text, onClick}) {
  return <FilterButtonStyled onClick={onClick}>{text}</FilterButtonStyled>
}

const FilterButtonStyled = styled.button`
  flex: 1 0 25%;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  background: pink;
  color: white;
  border: 2px solid white;

  &:hover {
  background: white;
  color: pink;
  }
`