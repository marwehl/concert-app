import React from 'react'
import {NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Heart } from 'styled-icons/fa-solid/Heart'
import { Home } from 'styled-icons/boxicons-solid/Home'
import { PlusCircle } from 'styled-icons/boxicons-solid/PlusCircle'

export default function Navigation () {
  return (
    <NavigationStyled>
      <LinkStyled exact to="/">
        <HomeStyled></HomeStyled>
      </LinkStyled>
      <LinkStyled to="/favorites"><HeartStyled></HeartStyled></LinkStyled>
      <LinkStyled to="/create"><PlusCircleStyled></PlusCircleStyled></LinkStyled>

    </NavigationStyled>
  )
}

const LinkStyled = styled(NavLink)`
  font-size: 1.3em;
  flex-grow: 1;
  color: inherit;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;

  &.active {
    color: #E87613;
  }
`

const NavigationStyled = styled.nav`
display: grid;
grid-auto-flow: column;
gap: 1px;
`

const HomeStyled = styled(Home)`
width: 28px;
`
const HeartStyled = styled(Heart)`
width: 28px;
`
const PlusCircleStyled = styled(PlusCircle)`
width: 28px;
`