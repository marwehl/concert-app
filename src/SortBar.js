import React, { useState } from 'react'
import styled from 'styled-components/macro';
import PropTypes from 'prop-types'

SortBar.propTypes = {
  handleRadioInputChange: PropTypes.func,
}
export default function SortBar ({handleRadioInputChange}) {

const [sortbarInput, setSortbarInput] = useState('Latest added')
const [sortOptionsOpen, setSortOptionsOpen] = useState(false)

function handleInputChange (event) {
setSortbarInput(event.target.value)
handleRadioInputChange(event.target.value)
}

function handleClick () {
  setSortOptionsOpen(!sortOptionsOpen)
}

  return (
    <SortBarStyled>
    <ButtonStyled onClick={handleClick}>
      Sort by...
    <LabelStyled
    active={sortOptionsOpen}
        selected={sortbarInput === 'Latest added'}>
          Latest added<InputStyled
    type="radio"
    name="sortOption"
    value="Latest added"
    checked={sortbarInput === 'Latest added'}
    onChange={handleInputChange}>
    </InputStyled></LabelStyled>
    <LabelStyled
          active={sortOptionsOpen}
        selected={sortbarInput === 'Date'}>
          Date<InputStyled
  
       type="radio"
       name="sortOption"
       value="Date"
        checked={sortbarInput === 'Date'}
    onChange={handleInputChange}>
    </InputStyled></LabelStyled>
    <LabelStyled
          active={sortOptionsOpen}
        selected={sortbarInput === 'Name of Artist'}>
      Name of artist<InputStyled
      type="radio"
      name="sortOption"
      value="Name of Artist"
      checked={sortbarInput === 'Name of Artist'}
    onChange={handleInputChange}>
    </InputStyled></LabelStyled>
      </ButtonStyled>
    </SortBarStyled>
  )
}

const SortBarStyled = styled.section`
display: flex;
grid-gap: 5px;
`

const ButtonStyled = styled.button`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
background: white;
padding: 5px;
border-radius: 10px;
border: none;
font-size: 1em;
box-shadow: 0 2px 4px #CCC2C2;
&:active {
  box-shadow: none;
}
`

const InputStyled = styled.input`
padding: 10px;
display: none;
`

const LabelStyled = styled.label`
  display: ${props => (props.active ? "block" : "none")};
  background: ${props => (props.selected ? "var(--orange)" : "white")};
  padding: 5px;
  border-radius: 10px;
  text-align: center;
  font-size: 1em;
  &:hover {
    border: 2px solid var(--orange);
  }
`;
