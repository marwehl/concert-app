import React from 'react'
import styled from 'styled-components/macro';
import mumford from './mumford.jpg'
import { brotliDecompress } from 'zlib';


export default function Concert({artist, date, place, styles}) {
  return (
    <ConcertStyled>
      <ImageStyled src={mumford} alt="pictureartist"/>
      <TextStyled>
      <ArtistStyled>{artist}</ArtistStyled>
      <h4>{date}</h4>
      <h4>{place}</h4>
      <p>{styles}</p>
      </TextStyled>
    </ConcertStyled>
  )
}

const ConcertStyled = styled.section`
border-radius: 10px;
border: none;
background-color: white;
`

const TextStyled = styled.section`
padding: 3px 20px;
`

const ImageStyled = styled.img`
width: 100%;
border-radius: 10px 10px 0 0;
`
const ArtistStyled = styled.h2`
font-weight: bold;
`

