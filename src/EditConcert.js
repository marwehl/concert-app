import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function EditConcert({ editConcertData, onSubmit}) {


  EditConcert.propTypes = {
    onSubmit: PropTypes.func
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
display: grid;
padding: 20px;
gap: 20px;
height: 60vh;
`

const LabelStyled = styled.label`
display: grid;
gap: 7px;
`


const InputStyled = styled.input`
border: none;
border-radius: 10px;
padding: 7px;

&: active {
background-color: lightgray;
}
&: focus {
background-color: lightgray;
}
`

const DateStyled = styled.div`
display: flex;
gap: 30px;
`

const TextareaStyled = styled.textarea`
height: 100px;
border: none;
border-radius: 10px;
`

const CreateButtonStyled = styled.button`
width: 50%;
align-self: center;
`