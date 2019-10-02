import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'


export default function CreateConcert ({onSubmit}) {

  CreateConcert.propTypes = {
    onSubmit: PropTypes.func
  }

  return (
 <FormStyled onSubmit={handleSubmit}>
<LabelStyled>Artist:<InputStyled name="artist" autofocus/></LabelStyled>
<DateStyled>
<LabelStyled>Date:<InputStyled name="date" type="date"/></LabelStyled>
<LabelStyled>Time:<InputStyled name="time" type="time"></InputStyled></LabelStyled>
</DateStyled>
<LabelStyled>Place:<InputStyled name="place"/></LabelStyled>
<LabelStyled>Description:<TextareaStyled name="description" type="text"/></LabelStyled>
<LabelStyled>Genres:<input name="styles"/></LabelStyled>
<CreateButtonStyled>Create</CreateButtonStyled>
</FormStyled>
  )

function handleSubmit(event) {
event.preventDefault()
const formData = new FormData(event.target)
const data = Object.fromEntries(formData)
data.styles = data.styles.split(',')
onSubmit(data)
}


}

const FormStyled = styled.form`
display: grid;
padding: 20px;
gap: 20px;
height: 60vh;
`

const LabelStyled = styled.section`
display: grid;
gap: 7px;
`


const InputStyled = styled.input`
border: none;
border-radius: 10px;
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