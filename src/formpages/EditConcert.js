import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import MyDatepicker from './MyDatepicker'


export default function EditConcert({ editConcertData, onSubmit}) {


  EditConcert.propTypes = {
    onSubmit: PropTypes.func,
    editConcertData: PropTypes.object
  }
 
  const [artist, setArtist] = useState(editConcertData.artist)
  const [concertDate, setConcertDate] = useState(new Date(editConcertData.concertDate))
  const [description, setDescription] = useState(editConcertData.description)
  const editGenres = editConcertData.genres.join(', ')
  const [genres, setGenres] = useState(editGenres)


  function handleDateChange(value) {
    setConcertDate(value)
  }


  return (
    
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled>Artist:<InputStyled name="artist" value={artist} onChange={event => setArtist(event.target.value)} autoFocus/></LabelStyled>
        <LabelStyled>Date:
          <MyDatepicker
            value={concertDate} 
            onChange={handleDateChange}
            name='date'
            date={concertDate}
          ></MyDatepicker></LabelStyled>
      <LabelStyled>Description:<TextareaStyled name="description" type="text" value={description} onChange={event => setDescription(event.target.value)}/></LabelStyled>
      <LabelStyled>Genres:<InputStyled name="genres" value={genres} onChange={event => setGenres(event.target.value)}
      /></LabelStyled>
      <CreateButtonStyled>Edit</CreateButtonStyled>
    </FormStyled>
  )


  function handleSubmit(event) {
    event.preventDefault()
    const newEditConcertData= {
      ...editConcertData,
      artist, concertDate, description, genres
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

const TextareaStyled = styled.textarea`
height: 160px;
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