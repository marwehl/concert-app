import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import styled from 'styled-components/macro'
import ConcertList from './ConcertList';
import Navigation from './Navigation'
import CreateConcert from './CreateConcert'
import HomePage from './HomePage'
import { getConcerts, postConcert, patchConcert, deleteConcert } from './services'



export default function App() {

  const [concerts, setConcerts] = useState([])

  useEffect(() => {
    getConcerts().then(concertsData => {
      setConcerts(concertsData)
    })
  }, [])

  function addConcert(concertData) {
    postConcert(concertData).then(concert => {
      setConcerts([...concerts, concert])
    })
  }

  const [selectedGenre, setSelectedGenre] = useState('all')

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
        onHeartClick={toggleIsFavorite}
        onSelectGenre={setSelectedGenre}
        onDeleteClick={removeConcert}
        onEditClick={editConcert}
        /> }/>
  <Route path="/favorites" render={() => <ConcertList 
  concerts={concerts.filter(concert => concert.isFavorite === true)} 
  onHeartClick={toggleIsFavorite}/> } />
      <Route path="/create" render={props => {
        console.log(props)
      return <CreateConcert 
        onSubmit={addConcert} cardData={props.cardData}/>}} />
      <Navigation/>
    </AppStyled>
    </Router>
  );

  function editConcert(concert) {
    return <Redirect to="/create" />
  }

  function removeConcert(concert) {
deleteConcert(concert._id)
.then(selectedConcert => {
  const index = concerts.findIndex(concert => concert._id === selectedConcert._id)
  setConcerts([
    ...concerts.slice(0, index),
    ...concerts.slice(index + 1)
  ])
})
  }
  
  function toggleIsFavorite(concert) {
    patchConcert(concert._id, { isFavorite: !concert.isFavorite })
      .then(updatedConcert => {
        const index = concerts.findIndex(concert => concert._id === updatedConcert._id)
        setConcerts([
          ...concerts.slice(0, index),
          { ...concert, isFavorite: updatedConcert.isFavorite },
          ...concerts.slice(index + 1),
        ])
      })
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



