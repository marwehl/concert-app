import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro';
import PropTypes from "prop-types";
import Audio from './Audio';
import Heart from './Heart'
import Date from './Date'
import FullInfo from './FullInfo';
import concert from "../images/concert.jpg";
import { KeyboardArrowDown } from 'styled-icons/material/KeyboardArrowDown'
import { Delete } from 'styled-icons/typicons/Delete'
import { Edit } from 'styled-icons/boxicons-regular/Edit'


export default function Concert({ 
  artist, 
  fullDate,
  createDate, 
  genres, 
  image, 
  description,
  previewUrl,
  onHeartClick,
  onDeleteClick,
  _id,
  currentUser
}) 

{
Concert.propTypes = {
  artist : PropTypes.string.isRequired,
  fullDate: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  description: PropTypes.string,
  onHeartClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  _id: PropTypes.string,
  currentUser: PropTypes.object
}

const [fullConcertIsVisible, setFullConcertIsVisible] = useState(false)
const [arrowShowsDown, setArrowShowsDown] = useState(false)
const [fullImageIsVisible, setFullImageIsVisible] = useState(false)

  return (
    <ConcertStyled>
      <DeleteStyled onClick={onDeleteClick}></DeleteStyled>
      <Link
        to={{
          pathname: "/edit",
          editConcertData: {
            id: _id,
            artist,
            fullDate,
            createDate,
            description,
            image,
            genres,
            onHeartClick
          }
        }}
      >
        <EditStyled />
      </Link>

      <ConcertImageStyled
        src={image ? image : concert}
        active={fullImageIsVisible}
      />

      <ConcertInfoStyled>
        <ConcertInfoHeadlineStyled>
            <ArtistStyled>{artist}</ArtistStyled>
            {previewUrl && 
            <Audio 
            previewUrl={previewUrl}
            />}

          <Heart 
          onHeartClick={onHeartClick}
          currentUser={currentUser}
          id={_id}/>
         
        </ConcertInfoHeadlineStyled>

        <Date
        fullDate={fullDate} />

        {fullConcertIsVisible && 
          <FullInfo
          genres={genres}
          description={description} />}
        {(description || genres.length > 0) && (
          <KeyboardArrowDownStyled
            active={arrowShowsDown}
            onClick={handleArrowClick}
          />
        )}
      </ConcertInfoStyled>
    </ConcertStyled>
  );

  function handleArrowClick() {
    setFullConcertIsVisible(!fullConcertIsVisible)
    setArrowShowsDown(!arrowShowsDown)
    setFullImageIsVisible(!fullImageIsVisible)
  }
}

const ConcertStyled = styled.section`
position: relative;
background-color: white;
border-radius: 10px;
box-shadow: 0 2px 4px #CCC2C2;
`
const ConcertImageStyled = styled.img`
  height: ${props => (props.active ? "" : "120px")};
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px 10px 0 0;
`;

const DeleteStyled = styled(Delete)`
position: absolute;
right: 10px;
top: 10px;
width: 30px;
color: white;
`
const EditStyled = styled(Edit)`
position: absolute;
right: 44px;
top: 12px;
width: 26px;
color: white;
`

const ConcertInfoStyled = styled.section`
display: flex;
flex-direction: column;
gap: 10px;
padding: 15px 30px 15px 15px;
`

const ConcertInfoHeadlineStyled = styled.div`
display: flex;
justify-content: space-between;
`

const ArtistStyled = styled.span`
font-size: 1.5em;
`

const KeyboardArrowDownStyled = styled(KeyboardArrowDown)`
width: 30px;
align-self: center;
transform: rotate(${props => (props.active ? '180deg' : '0')})
`