import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import styled from 'styled-components/macro'
import ConcertList from './ConcertList';
import Navigation from './Navigation'
import CreateConcert from './CreateConcert'
import HomePage from './HomePage'
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
      genres: ['Rock', 'Indie', 'Folk'],
      description: 'Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      isFavorite : true,
    },
    {
  image: bishop,
      artist: 'Bishop briggs',
      place: 'Große Freiheit',
      date: '14.10.2020',
      genres: ['Rock', 'Indie'],
      description: 'Sed diam voluptua.  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
   isFavorite: false,
    },
    {
  image: okkid,
      artist: 'Ok kid',
      place: 'Große Freiheit',
      date: '03.11.2019',
      genres: ['Rap', 'Indie', 'Folk'],
      description: 'Sed diam voluptua.  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    isFavorite: true,
    },
    {
  image: frittenbude,
      artist: 'Frittenbude',
      place: 'Mojo',
      date: '12.05.2019',
      genres: ['Rap', 'Pop', 'Rock'],
      description: 'Sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
    isFavorite: false,
    }
  ])

  const [selectedGenre, setSelectedGenre] = useState('all')

  console.log('CONCERTS', concerts)
  const allGenres = Array.from(
    concerts.reduce((prev, concert) => {
      concert.genres && concert.genres.forEach(genre => prev.add(genre))
      return prev
    }, new Set())
  )

  const filteredByGenre =
    selectedGenre === 'all'
      ? concerts
      : concerts.filter(concert => concert.genres && concert.genres.includes(selectedGenre))


  return (
    <Router>
    <AppStyled>
        <Route exact path="/" render={() => <HomePage 
        concerts={filteredByGenre} 
        genres={allGenres}
        toggleIsFavorite={toggleIsFavorite}
        onSelectGenre={setSelectedGenre}
        /> }/>
  <Route path="/favorites" render={() => <ConcertList concerts={concerts.filter(concert => concert.isFavorite === true)} toggleIsFavorite={toggleIsFavorite}/> } />
      <Route path="/create" render={() => <CreateConcert onSubmit={addConcert}/>} />
      <Navigation/>
    </AppStyled>
    </Router>
  );


function addConcert (concert) {
setConcerts([
  ...concerts,
   concert
])

}

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
display: grid;
grid-template-rows: auto 48px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
`



