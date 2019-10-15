import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import axios from "axios";
import MyDatepicker from "../formpages/MyDatepicker";

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function CreatePage({ onSubmit, editConcertData }) {
  const [isCreated, setIsCreated] = useState(false);

  CreatePage.propTypes = {
    onSubmit: PropTypes.func
  };

    const [artist, setArtist] = useState(editConcertData.artist ? editConcertData.artist : '' );
    const [date, setDate] = useState(new Date(editConcertData.fullDate ? editConcertData.fullDate : Date.now()));
    const [description, setDescription] = useState(editConcertData.description ? editConcertData.description : '');
    const editGenres = editConcertData.genres ? editConcertData.genres.join(", ").split(',') : []
    const [genres, setGenres] = useState(editGenres)
    //const [image, setImage] = useState(editConcertData.image ? editConcertData.image : '');
    console.log(editConcertData.image)

  return isCreated ? (
    <Redirect to="/" />
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
        <MyDatepicker
          name="date"
          date={date}
          onChange={value => setDate(value)}
        ></MyDatepicker>
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
      <LabelStyled>
        Image:
        <InputStyled type="file" name="image"></InputStyled>
      </LabelStyled>
      <CreateButtonStyled>Create</CreateButtonStyled>
    </FormStyled>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fullDate = new Date(date);
    let data = Object.fromEntries(formData);
    data = { ...data, fullDate };
    data.genres = data.genres
      .split(",")
      .filter(item => item !== "")
      .map(item => item.trim())
      .map(item => item.slice(0, 1).toUpperCase() + item.slice(1));
    

    data.image === (editConcertData.image || '')
      ? (editConcertData.id ? onSubmit(editConcertData.id, data) : onSubmit(data))
      : upload(formData.get("image"))
          .then(response => {
            data.image = response.data.url;
            (editConcertData.id
              ? onSubmit(editConcertData.id, data)
              : onSubmit(data))
            setIsCreated(true);
          })
          .catch(err => console.log(err));
  }

  function upload(file) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", PRESET);
    return axios.post(url, formData, {
      headers: {
        "Content-type": "multipart/form-data"
      }
    });
  }
}

const FormStyled = styled.form`
  width: 100%;
  display: grid;
  padding: 30px;
  gap: 20px;
  height: 60vh;
`;

const LabelStyled = styled.label`
  display: grid;
  gap: 0.7px;
`;

const InputStyled = styled.input`
  border: 1px solid black;
  border-radius: 10px;
  padding: 7px;
  font-size: 1.1em;
  &: active {
    border-color: #e87613;
  }
  &: focus {
    border-color: #e87613;
  }
`;

const TextareaStyled = styled.textarea`
  height: 160px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 7px;
  font-family: Helvetica;
  font-size: 1.1em;
  &: active {
    border-color: #e87613;
  }
  &: focus {
    border-color: #e87613;
  }
`;

const CreateButtonStyled = styled.button`
  width: 100%;
  align-self: center;
  background-color: #e87613;
  font-size: 2em;
  height: 60px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 10px 10px gray;
  &:active {
    box-shadow: none;
  }
`;
