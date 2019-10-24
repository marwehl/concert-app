import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import styled from 'styled-components/macro'
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Navigation from './Navigation'
import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage'
import FavoritesPage from './pages/FavoritesPage'
import CalendarPage from './pages/CalendarPage'
import LoginPage from "./pages/LoginPage";
import { getConcerts, postConcert, patchConcert, deleteConcert, patchUser, getSingleUser } from './services'

export default function App() {

  const [concerts, setConcerts] = useState([])
  const [currentUser, setCurrentUser] = useState(getFromLocalStorage("user") || {});


  function getFromLocalStorage(key) {
    const jsonString = localStorage.getItem(key);
    let data;
    try {
      data = JSON.parse(jsonString);
    } catch (error) {}
    return data;
  }

  const options = {
position: positions.MIDDLE,
    timeout: 3000,
    offset: "50px",
    transition: transitions.SCALE
  };

  const AlertTemplate = ({ style, message }) => (
    <AlertStyled style={style}>{message}</AlertStyled>
  );

  //const [isAdmin, setIsAdmin] = useState(false)   wird als nächstes eingebaut

  useEffect(() => {
    getConcerts().then(setConcerts)  
  }, []);

  useEffect(() => {
  setCurrentUser(currentUser);
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser])


  function handleLogin(userData) {
    return getSingleUser(userData.username)
    .then(user => {
      setCurrentUser(user)
      return user
    })
  }


  function addConcert(concertData) {
    postConcert(concertData).then(concert => {
      setConcerts([...concerts, concert]);
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
    <AlertProvider template={AlertTemplate} {...options}>
      <Router>
        <AppStyled>
          <Route
            path="/home"
            render={() => (
              <HomePage
                concerts={filteredByGenre}
                genres={allGenres}
                onHeartClick={setUsersFavorite}
                onSelectGenre={setSelectedGenre}
                onDeleteClick={removeConcert}
                selectedGenre={selectedGenre}
                currentUser={currentUser}
              />
            )}
          />
          <Route
            path="/favorites"
            render={() => (
              <FavoritesPage
                currentUser={currentUser}
                concerts={concerts.filter(concert =>
                  currentUser.favorites.includes(concert._id)
                )}
                onHeartClick={setUsersFavorite}
              />
            )}
          />
          <Route
            path="/calendar"
            render={() => (
              <CalendarPage
                currentUser={currentUser}
                concerts={concerts.filter(concert =>
                  currentUser.favorites.includes(concert._id)
                )}
              />
            )}
          />
          <Route
            path="/create"
            render={() => {
              return <CreatePage onSubmit={addConcert} editConcertData={{}} />;
            }}
          />
          <Route
            path="/edit"
            render={props => {
              return (
                <CreatePage
                  onSubmit={editConcert}
                  editConcertData={props.location.editConcertData}
                />
              );
            }}
          />
          <Route
            exact
            path="/"
            render={() => <LoginPage handleLogin={handleLogin} />}
          />
          <Navigation />
        </AppStyled>
      </Router>
    </AlertProvider>
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
    }).then(currentUser => {
      setCurrentUser(currentUser)
       })
  : patchUser(currentUser._id, {
      favorites: [...currentUser.favorites, concert._id]
    }).then(currentUser => {
      setCurrentUser(currentUser)
  });
  }

  function editConcert(id, editData) {
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
  
}

const AppStyled = styled.section`
display: grid;
grid-template-rows: auto 48px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  position: fixed;
`


const AlertStyled = styled.div`
text-align: center;
  border: none;
  padding: 15px;
  background: var(--orange);
  font-size: 1.7em;
  border-radius: 5px;
  width: 300px;
`;



