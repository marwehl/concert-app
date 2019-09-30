import React from 'react';
import styled from 'styled-components/macro'
import ConcertList from './ConcertList';


export default function App() {

  const concerts = [
    {
      image: './mumford.jpg',
      artist: 'mumford and sons',
      place: 'Mojo',
      date: '2019-10-14',
      styles: ['rock', 'indie', 'folk']
    },
    {
  image: './mumford.jpg',
      artist: 'bishop briggs',
      place: 'Große Freiheit',
      date: '2020-10-14',
      styles: ['rock', 'indie']
    },
    {
  image: './mumford.jpg',
      artist: 'ok kid',
      place: 'Große Freiheit',
      date: '2019-11-03',
      styles: ['rap', 'indie', 'folk']
    },
    {
  image: './mumford.jpg',
      artist: 'frittenbude',
      place: 'Mojo',
      date: '2019-05-12',
      styles: ['rap', 'pop', 'rock']
    }
  ]

  return (
    <AppStyled>
      <ConcertList concerts={concerts}/>
    </AppStyled>
  );
}
const AppStyled = styled.div`
  //position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
`


