import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import styled from 'styled-components/macro'
import Navigation from './Navigation'
import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage'
import FavoritesPage from './pages/FavoritesPage'
import CalendarPage from './pages/CalendarPage'
import LoginPage from "./LoginPage";
import { getConcerts, postConcert, patchConcert, deleteConcert, getUsers, postUser, patchUser, deleteUser } from './services'


export default function App() {

  const [concerts, setConcerts] = useState([])
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({
    favorites: [
      "5da86c862bb41a6aabb9ce4a",
      "5da86caa2bb41a6aabb9ce4b",
      "5da86cf42bb41a6aabb9ce4d"
    ],
    _id: "5da859b2853eb55f068663b1",
    username: "Josi",
    password: "word5678",
    __v: 0
  });
  //const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    getConcerts().then(setConcerts)
  }, [])

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  console.log('users', users)

  function handleLogin(userData) {
    const selectedUser = users.filter(
      user =>
        user.username === userData.username &&
        user.password === userData.password
    )
    selectedUser
      ? setCurrentUser(selectedUser[0])
      : setCurrentUser({});

      console.log(currentUser)
  }


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
        onHeartClick={setUsersFavorite}
        onSelectGenre={setSelectedGenre}
        onDeleteClick={removeConcert}
        selectedGenre={selectedGenre}
        /> }/>
  <Route path="/favorites" render={() => <FavoritesPage 
  concerts={concerts.filter(concert => currentUser.favorites.includes(concert._id))} 
  onHeartClick={toggleIsFavorite}/> } />
        <Route path="/calendar" render={() => <CalendarPage
          concerts={concerts.filter(concert => currentUser.favorites.includes(concert._id))}
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
        <Route path="/login"
        render={() => <LoginPage handleLogin={handleLogin}/>}/>
      <Navigation/>
    </AppStyled>
    </Router>
  );

  function setUsersFavorite(concert) {
    const indexFav = currentUser.favorites.findIndex(
      favorite => favorite === concert._id
    );
  currentUser.favorites.includes(concert._id)
  ? patchUser(currentUser._id, {
      favorites: [
        ...currentUser.favorites.slice(0, indexFav),
        ...currentUser.favorites.slice(indexFav + 1)
      ]
    }).then(updatedUser => {
      const index = users.findIndex(user => user._id === updatedUser._id);
      const indexFav = currentUser.favorites.findIndex(
        favorite => favorite === concert._id
      );
      console.log(currentUser.favorites);
      console.log(indexFav);
      setUsers([
        ...users.slice(0, index),
        {
          ...currentUser,
          favorites: [
            ...currentUser.favorites.slice(0, indexFav),
            ...currentUser.favorites.slice(indexFav + 1)
          ]
        },
        ...users.slice(index + 1)
      ]);
    })
  : patchUser(currentUser._id, {
      favorites: [...currentUser.favorites, concert._id]
    }).then(updatedUser => {
      const index = users.findIndex(user => user._id === updatedUser._id);
      setUsers([
        ...users.slice(0, index),
        { ...currentUser, favorites: [...currentUser.favorites, concert._id] },
        ...users.slice(index + 1)
      ]);
    });

  }


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



