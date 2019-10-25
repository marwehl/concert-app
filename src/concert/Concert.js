import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro';
import PropTypes from "prop-types";
import Tag from './Tag';
import concert from "../images/concert.jpg";
import { formatDate, formatTime } from '../utils.js'
import { KeyboardArrowDown } from 'styled-icons/material/KeyboardArrowDown'
import { DateRange } from 'styled-icons/material/DateRange'
import { Time } from 'styled-icons/boxicons-regular/Time'
import { Heart } from 'styled-icons/fa-regular/Heart'
import { Heart as FullHeart} from 'styled-icons/fa-solid/Heart'
import { Delete } from 'styled-icons/typicons/Delete'
import { Edit } from 'styled-icons/boxicons-regular/Edit'
import {PlayArrow} from "styled-icons/material/PlayArrow";
import { Pause } from "styled-icons/boxicons-regular/Pause";


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
const [isPlaying, setIsPlaying] = useState(false)
const audioEl = useRef(null);

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
            <AudioStyled src={previewUrl} ref={audioEl} loop></AudioStyled>
            {(previewUrl && !isPlaying) &&
            <PlayArrowStyled onClick={onPlayClick} />
            }
            {(previewUrl && isPlaying )&&
            <PauseStyled onClick={onPauseClick} />
            }
          <HeartStyled
            onClick={onHeartClick}
            active={
              currentUser.favorites && currentUser.favorites.includes(_id)
            }
          ></HeartStyled>
          <FullHeartStyled
            onClick={onHeartClick}
            active={!currentUser.favorites.includes(_id)}
          ></FullHeartStyled>
        </ConcertInfoHeadlineStyled>
        <DateContainerStyled>
          <div>
            <DateRangeStyled />
            <span>{formatDate(fullDate)}</span>
          </div>
          <div>
            <TimeStyled />
            <span>{formatTime(fullDate)}</span>
          </div>
        </DateContainerStyled>

        {fullConcertIsVisible && (
          <ConcertFullInfoStyled>
            <DescriptionStyled>{description}</DescriptionStyled>
            <TagListStyled>
              {genres.map(genre => genre && <Tag text={genre} key={genre} />)}
            </TagListStyled>
          </ConcertFullInfoStyled>
        )}
        {(description || genres.length > 0) && (
          <KeyboardArrowDownStyled
            active={arrowShowsDown}
            onClick={handleArrowClick}
          />
        )}
      </ConcertInfoStyled>
    </ConcertStyled>
  );

  function onPlayClick() {
    audioEl.current.play();
    setIsPlaying(!isPlaying)
  }

  function onPauseClick() {
    audioEl.current.pause()
     setIsPlaying(!isPlaying);
  }

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

const AudioStyled = styled.audio`
width: 50px;
`
const PlayArrowStyled = styled(PlayArrow)`
  position: absolute;
  left: 150px;
  top: 85px;
  width: 48px;
  color: var(--orange);
  background: white;
  border: 2px solid var(--orange);
  border-radius: 50%;
`;

const PauseStyled = styled(Pause)`
  position: absolute;
  left: 150px;
  top: 85px;
  width: 48px;
  color: var(--orange);
  background: white;
  border: 2px solid var(--orange);
  border-radius: 50%;
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

const HeartStyled = styled(Heart)`
width: 28px;
margin-top: -10px;
display: ${props => (props.active ? 'none' : 'block')}
`

const FullHeartStyled = styled(FullHeart)`
  width: 28px;
  margin-top: -10px;
  color: var(--orange);
  display: ${props => (props.active ? "none" : "block")};
`;

const  DateContainerStyled = styled.section`
display: flex;
justify-content: space-between;
gap: 7px;
`

const DateRangeStyled = styled(DateRange)`
width: 18px;
margin: 0 5px 5px;
`

const TimeStyled = styled(Time)`
width: 18px;
margin: 0 5px 5px;
`

const KeyboardArrowDownStyled = styled(KeyboardArrowDown)`
width: 30px;
align-self: center;
transform: rotate(${props => (props.active ? '180deg' : '0')})
`

const ConcertFullInfoStyled = styled.section`
display: flex;
flex-direction: column;
`

const DescriptionStyled = styled.p`
word-break: break-word;`

const TagListStyled = styled.section`
align-self: center;
`