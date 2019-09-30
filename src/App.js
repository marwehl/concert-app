import React from 'react';
import styled from 'styled-components/macro'
import ConcertList from './ConcertList';
import mumford from './images/mumford.jpg'
import bishop from './images/bishop.webp'
import okkid from './images/okkid.jpg'
import frittenbude from './images/frittenbude.png'


export default function App() {

  const concerts = [
    {
      image: mumford,
      artist: 'mumford and sons',
      place: 'Mojo',
      date: '14.10.2019',
      date_data: '2019-10-14',
      styles: ['rock', 'indie', 'folk']
    },
    {
  image: bishop,
      artist: 'bishop briggs',
      place: 'Große Freiheit',
      date: '14.10.2020',
      date_data: '2020-10-14',
      styles: ['rock', 'indie']
    },
    {
  image: okkid,
      artist: 'ok kid',
      place: 'Große Freiheit',
      date: '03.11.2019',
      date_data: '2019-11-03',
      styles: ['rap', 'indie', 'folk']
    },
    {
  image: frittenbude,
      artist: 'frittenbude',
      place: 'Mojo',
      date: '12.05.2019',
      date_data: '2019-05-12',
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



