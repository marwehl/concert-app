import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import styled from 'styled-components/macro'
import Navigation from './Navigation'
import CreatePage from './pages/CreatePage'
import EditConcert from './formpages/EditConcert'
import HomePage from './pages/HomePage'
import FavoritesPage from './pages/FavoritesPage'
import CalendarPage from './pages/CalendarPage'
import { getConcerts, postConcert, patchConcert, deleteConcert } from './services'



export default function App() {

  const [concerts, setConcerts] = useState([])

  useEffect(() => {
    getConcerts().then(setConcerts)
  }, [])

  function addConcert(concertData) {
    postConcert(concertData).then(concert => {
      setConcerts([concert, ...concerts])
    })
  }

  const [selectedGenre, setSelectedGenre] = useState('All')

  let allGenres = Array.from(
    concerts.reduce((prev, concert) => {
      concert.genres && concert.genres.forEach(genre => prev.add(genre))
      return prev
    }, new Set())
  )

  const filteredByGenre =
    selectedGenre === 'All'
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
        selectedGenre={selectedGenre}
        /> }/>
  <Route path="/favorites" render={() => <FavoritesPage 
  concerts={concerts.filter(concert => concert.isFavorite === true)} 
  onHeartClick={toggleIsFavorite}/> } />
        <Route path="/calendar" render={() => <CalendarPage
          concerts={concerts.filter(concert => concert.isFavorite === true)}
       />} />
      <Route path="/create" 
      render={() => {
      return <CreatePage 
        onSubmit={addConcert}
        editConcertData={{}}/>}} />
        <Route path="/edit"
        render={props => {
          return <CreatePage
            onSubmit={editConcert} editConcertData={props.location.editConcertData}/>}}/>
      <Navigation/>
    </AppStyled>
    </Router>
  );


  function editConcert(id, editData) {
    console.log('editdata', editData)
    patchConcert(id, editData)
    .then(editConcert => {
      const index = concerts.findIndex(concert  => concert._id === editConcert._id)
      setConcerts([
        ...concerts.slice(0, index),
        editConcert,
        ...concerts.slice(index + 1)
      ]);
    })
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



