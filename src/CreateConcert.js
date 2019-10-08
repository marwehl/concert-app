import React, {useState} from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import axios from 'axios'


const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

export default function CreateConcert({ onSubmit}) {

  CreateConcert.propTypes = {
    onSubmit: PropTypes.func
  }

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    data.date = formatDate(data.date)
    data.genres = data.genres.split(',')
      .map(item => item.trim())

    data.image === ''
      ? onSubmit(data)
      : upload(formData.get('image'))
        .then(response => {
          data.image = response.data.url
          onSubmit(data)
        })
        .catch(err => console.log(err))
  }

  const months = [
    'Jan',
    'Feb',
    'März',
    'Apr',
    'Mai',
    'Juni',
    'Juli',
    'Aug',
    'Sept',
    'Okt',
    'Nov',
    'Dez'
  ]

  function formatDate(date) {
    const newDate = new Date(date)
    const formattedDate =
      newDate.getDate() +
      '. ' +
      months[newDate.getMonth()] +
      ' ' +
      newDate.getFullYear()
    return formattedDate
  }

  function upload(file) {
    console.log('UPLOAD')
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



  return (
 <FormStyled onSubmit={handleSubmit}>
<LabelStyled>Artist:<InputStyled name="artist" autoFocus/></LabelStyled>
<DateStyled>
        <LabelStyled>Date:<InputStyled name="date" type="date" /></LabelStyled>
        <LabelStyled>Time:<InputStyled name="time" type="time" ></InputStyled></LabelStyled>
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
padding: 7px;

&: active {
background-color: lightgray;
}
&: focus {
background-color: lightgray;
}
`

const CreateButtonStyled = styled.button`
width: 50%;
align-self: center;
`