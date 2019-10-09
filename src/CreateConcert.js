import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import axios from 'axios'
import MyDatepicker from './MyDatepicker'


const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

export default function CreateConcert({ onSubmit}) {

  CreateConcert.propTypes = {
    onSubmit: PropTypes.func
  }

  const [date, setDate] = useState(Date.now())


  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const concertDate = new Date(date)
   let data = Object.fromEntries(formData)
    data = {...data, concertDate}
    console.log(data)
    data.genres = data.genres.split(',')
      .filter(item => item !== '' )
      .map(item => item.trim())
      .map(item => (item.slice(0, 1).toUpperCase() + item.slice(1)))

    data.image === ''
      ? onSubmit(data)
      : upload(formData.get('image'))
        .then(response => {
          data.image = response.data.url
          onSubmit(data)
        })
        .catch(err => console.log(err))
  }

  function upload(file) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', PRESET)
    return axios.post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        }
      })
    }

  function handleDateChange(value) {
    setDate(value)
  }



  return (
 <FormStyled onSubmit={handleSubmit}>
<LabelStyled>Artist:<InputStyled name="artist" autoFocus/></LabelStyled>
<DateStyled>
        <MyDatepicker
          name='date'
          date={date}
          onChange={handleDateChange}></MyDatepicker>
</DateStyled>
      <LabelStyled>Place:<InputStyled name="place" /></LabelStyled>
      <LabelStyled>Description:<TextareaStyled name="description" type="text"/></LabelStyled>
      <LabelStyled>Genres:<InputStyled name="genres"
      /></LabelStyled>
      <LabelStyled>Picture:
      <input type="file" name="image"></input>
      </LabelStyled>
<CreateButtonStyled>Create</CreateButtonStyled>
</FormStyled>
  )

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