import React from 'react'
import styled from 'styled-components/macro';
import PropTypes from 'prop-types'

FilterButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default function FilterButton({text, onClick, selectedGenre}) {


  return (<FilterButtonStyled 
    onClick={() => onClick(text)} 
    active={text === (selectedGenre) ? true : false
    }>{text}</FilterButtonStyled>
  )
}

const FilterButtonStyled = styled.button`
  flex: 1 0 20%;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => (props.active ? "#f39b4f" : "white")};
  font-size: 1.3em;
  outline: none;
  border: none;
  margin: 5px;
  border-radius: 10px;
  box-shadow: 0 2px 4px #ccc2c2;

  &:hover {
    background: #f39b4f;
  }
`;