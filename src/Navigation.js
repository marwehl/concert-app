import React from 'react'
import {NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Heart } from 'styled-icons/fa-solid/Heart'
import { Home } from 'styled-icons/boxicons-solid/Home'
import { PlusCircle } from 'styled-icons/boxicons-solid/PlusCircle'
import { Calendar } from 'styled-icons/boxicons-regular/Calendar'
import { Exit } from "styled-icons/icomoon/Exit";


export default function Navigation () {
  return (
    <NavigationStyled>
      <LinkStyled to="/home">
        <HomeStyled></HomeStyled>
      </LinkStyled>
      <LinkStyled to="/favorites">
        <HeartStyled></HeartStyled>
      </LinkStyled>
      <LinkStyled to="/calendar">
        <CalendarStyled></CalendarStyled>
      </LinkStyled>
      <LinkStyled to="/create">
        <PlusCircleStyled></PlusCircleStyled>
      </LinkStyled>
      <LinkStyled exact to="/">
        <ExitStyled></ExitStyled>
      </LinkStyled>
    </NavigationStyled>
  );
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
    color: var(--orange);
  }
`;

const NavigationStyled = styled.nav`
display: grid;
grid-auto-flow: column;
gap: 1px;
`
const ExitStyled = styled(Exit)`
width: 28px;
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
const CalendarStyled = styled(Calendar)`
width: 28px;
`