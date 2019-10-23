import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import axios from "axios";
import Datepicker from "../createConcert/Datepicker"
import AddImageIcon from "../createConcert/AddImageIcon";
import concert from "../images/concert.jpg"

 CreatePage.propTypes = {
   onSubmit: PropTypes.func,
   editConcertData: PropTypes.object
 };

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function CreatePage({ onSubmit, editConcertData }) {

    const [isCreated, setIsCreated] = useState(false);
    const [artist, setArtist] = useState(editConcertData.artist ? editConcertData.artist : '' );
    const [date, setDate] = useState(new Date(editConcertData.fullDate ? editConcertData.fullDate : Date.now()));
    const [description, setDescription] = useState(editConcertData.description ? editConcertData.description : '');
    const [genres, setGenres] = useState(
      editConcertData.genres ? editConcertData.genres.join(", ").split(",") : []
    );
   const [image, setImage] = useState(editConcertData.image ? editConcertData.image : concert);

  return isCreated ? (
    <Redirect to="/home" />
  ) : (
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled>
        Artist:
        <InputStyled
          name="artist"
          value={artist}
          onChange={event => setArtist(event.target.value)}
          autoFocus
        />
      </LabelStyled>
      <LabelStyled>
        Date:
        <Datepicker
          name="date"
          date={date}
          onChange={value => setDate(value)}
        ></Datepicker>
      </LabelStyled>
      <LabelStyled>
        Description:
        <TextareaStyled
          name="description"
          type="text"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </LabelStyled>
      <LabelStyled>
        Genres:
        <InputStyled
          name="genres"
          value={genres}
          onChange={event => setGenres(event.target.value)}
        />
      </LabelStyled>
      <ImageContainerStyled>
        <LabelStyled>
          <AddImageIcon />
          <InputImageStyled
            type="file"
            name="image"
            onChange={upload}
          ></InputImageStyled>
        </LabelStyled>
        <ImageStyled src={image} />
      </ImageContainerStyled>
      <CreateButtonStyled>Create</CreateButtonStyled>
    </FormStyled>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fullDate = new Date(date);
    //const createDate = new Date();
    let data = Object.fromEntries(formData);
    data = { ...data, fullDate, image };
    console.log(data)
    data.genres = data.genres
      .split(",")
      .filter(item => item !== "")
      .map(item => item.trim())
      .map(item => item.slice(0, 1).toUpperCase() + item.slice(1));
         setIsCreated(true);
             editConcertData.id
            ? onSubmit(editConcertData.id, data)
            : onSubmit(data)        
  }
  
  function upload(event) {
    const file = event.target.files[0];
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", PRESET);
    return axios.post(url, formData, {
      headers: {
        "Content-type": "multipart/form-data"
      }
    }).then(response => {
      setImage(response.data.url);
  }
    ).catch(err => console.log(err));
  }
}

const FormStyled = styled.form`
  display: grid;
  padding: 20px;
  gap: 16px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const LabelStyled = styled.label`
  display: grid;
  gap: 0.5px;
`;

const InputStyled = styled.input`
  padding: 7px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 1.1em;
  &: active {
    border-color: var(--orange);
  }
  &: focus {
    border-color: var(--orange);
  }
`;

const ImageContainerStyled = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const ImageStyled = styled.img`
border: none;
width: 150px;`

const TextareaStyled = styled.textarea`
  height: 140px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 7px;
  font-family: inherit;
  font-size: 1.1em;
  &: active {
    border-color: var(--orange);
  }
  &: focus {
    border-color: var(--orange);
  }
`;

const CreateButtonStyled = styled.button`
  height: 48px;
  align-self: center;
  background-color: var(--orange);
  font-size: 2em;
  border: none;
  border-radius: 10px;
  box-shadow: 0 10px 10px gray;
  &:active {
    box-shadow: none;
  }
`;

const InputImageStyled = styled.input`
display:none;
`
;
