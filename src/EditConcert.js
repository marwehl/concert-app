import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'


export default function EditConcert({ editConcertData, onSubmit}) {


  EditConcert.propTypes = {
    onSubmit: PropTypes.func,
    editConcertData: PropTypes.object
  }
 
  const [artist, setArtist] = useState(editConcertData.artist)
  const [date, setDate] = useState(editConcertData.date)
  const [place, setPlace] = useState(editConcertData.place)
  const [description, setDescription] = useState(editConcertData.description)
  const editGenres = editConcertData.genres.join(', ')
  const [genres, setGenres] = useState(editGenres)


  return (
    
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled>Artist:<InputStyled name="artist" value={artist} onChange={event => setArtist(event.target.value)}/></LabelStyled>
      <DateStyled>
        <LabelStyled>Date:<InputStyled name="date" type="date" value={date} onChange={event => setDate(event.target.value)} /></LabelStyled>
       
      </DateStyled>
      <LabelStyled>Place:<InputStyled name="place" value={place} onChange={event => setPlace(event.target.value)} /></LabelStyled>
      <LabelStyled>Description:<TextareaStyled name="description" type="text" value={description} onChange={event => setDescription(event.target.value)}/></LabelStyled>
      <LabelStyled>Genres:<InputStyled name="genres" value={genres} onChange={event => setGenres(event.target.value)}
      /></LabelStyled>
      <CreateButtonStyled>Edit</CreateButtonStyled>
    </FormStyled>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const newEditConcertData= {
      artist, date, place, description, genres
    }
    newEditConcertData.genres = newEditConcertData.genres.split(',')
  .map(item => item.trim())
    onSubmit(editConcertData.id, newEditConcertData)
  }


}

const FormStyled = styled.form`
width: 100%;
display: grid;
padding: 30px;
gap: 20px;
height: 60vh;
`

const LabelStyled = styled.label`
display: grid;
gap: 0.7px;
`


const InputStyled = styled.input`
border: 1px solid black;
border-radius: 10px;
padding: 7px;
font-size: 1.1em;
&: active {
border-color: #E87613 ;
}
&: focus {
border-color: #E87613;
}
`

const DateStyled = styled.div`
display: flex;
gap: 30px;
`

const TextareaStyled = styled.textarea`
height: 100px;
border: 1px solid black;
border-radius: 10px;
padding: 7px;
font-family: Helvetica;
font-size: 1.1em;
&: active {
border-color: #E87613 ;
}
&: focus {
border-color: #E87613;
}
`

const CreateButtonStyled = styled.button`
width: 100%;
align-self: center;
background-color: #E87613;
font-size: 2em;
height: 60px;
border: none;
border-radius: 10px;
box-shadow: 0 10px 10px gray;
&:active {
  box-shadow: none;
}
`