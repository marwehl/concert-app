import React from 'react'
import styled from 'styled-components/macro';
import PropTypes from 'prop-types'

FilterButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default function FilterButton({text, onClick}) {
  return <FilterButtonStyled onClick={onClick}>{text}</FilterButtonStyled>
}

const FilterButtonStyled = styled.button`
  flex: 1 0 25%;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #EBEBF5;
  color: #6D7278;
  border: 2px solid #6D7278;
  font-size: 1.2em;

  &:hover {
  background: white;
  color: #6D7278;
  }
`