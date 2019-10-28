import React from 'react'
import {NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Heart as FavoritesButton } from 'styled-icons/fa-solid/Heart'
import { Home as HomeButton } from 'styled-icons/boxicons-solid/Home'
import { PlusCircle as CreateButton } from 'styled-icons/boxicons-solid/PlusCircle'
import { Calendar as CalendarButton } from 'styled-icons/boxicons-regular/Calendar'
import { Exit as LogoutButton } from "styled-icons/icomoon/Exit";


export default function Navigation () {
  return (
    <NavigationStyled>
      <LinkStyled to="/home">
        <ButtonStyled>
        <HomeButton/>
        </ButtonStyled>
      </LinkStyled>
      <LinkStyled to="/favorites">
        <ButtonStyled>
        <FavoritesButton/>
        </ButtonStyled>
      </LinkStyled>
      <LinkStyled to="/calendar">
          <ButtonStyled>
        <CalendarButton/>
        </ButtonStyled>
      </LinkStyled>
      <LinkStyled to="/create">
            <ButtonStyled>
        <CreateButton/>
        </ButtonStyled>
      </LinkStyled>
      <LinkStyled exact to="/">
              <ButtonStyled>
        <LogoutButton/>
        </ButtonStyled>
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
const ButtonStyled = styled.div`
width: 28px;
`