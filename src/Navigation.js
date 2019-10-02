import React from 'react'
import {NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Navigation () {
  return (
    <NavigationStyled>
      <LinkStyled exact to="/">
        Home
      </LinkStyled>
      <LinkStyled to="/favorites">Favoriten</LinkStyled>
      <LinkStyled to="/create">Create</LinkStyled>

    </NavigationStyled>
  )
}

const LinkStyled = styled(NavLink)`
  font-size: 2em;
  flex-grow: 1;
  color: inherit;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightgray;

  &.active {
    background: hotpink;
  }
`


const NavigationStyled = styled.nav`
display: grid;
grid-auto-flow: column;
gap: 1px;
`
