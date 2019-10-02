import React, {useState} from 'react';
import styled from 'styled-components/macro'
import ConcertList from './ConcertList';
import mumford from './images/mumford.jpg'
import bishop from './images/bishop.webp'
import okkid from './images/okkid.jpg'
import frittenbude from './images/frittenbude.png'


export default function App() {

  const [concerts, setConcerts] = useState([
    {
      image: mumford ,
      artist: 'Mumford and sons',
      place: 'Mojo',
      date: '14.10.2019',
      styles: ['rock', 'indie', 'folk'],
      description: 'Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      isFavorite : false
    },
    {
  image: bishop,
      artist: 'Bishop briggs',
      place: 'Große Freiheit',
      date: '14.10.2020',
      styles: ['rock', 'indie'],
      description: 'Sed diam voluptua.  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
   isFavorite: false,
    },
    {
  image: okkid,
      artist: 'Ok kid',
      place: 'Große Freiheit',
      date: '03.11.2019',
      styles: ['rap', 'indie', 'folk'],
      description: 'Sed diam voluptua.  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    isFavorite: true,
    },
    {
  image: frittenbude,
      artist: 'Frittenbude',
      place: 'Mojo',
      date: '12.05.2019',
      styles: ['rap', 'pop', 'rock'],
      description: 'Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
    isFavorite: false,
    }
  ])

  return (
    <AppStyled>
      <ConcertList concerts={concerts} toggleIsFavorite={toggleIsFavorite}/>
    </AppStyled>
  );

  function toggleIsFavorite(index) {
    const concert = concerts[index]
    setConcerts([
      ...concerts.slice(0, index),
      { ...concert, isFavorite: !concert.isFavorite },
      ...concerts.slice(index + 1),
    ])
  }
}

const AppStyled = styled.section`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
`



