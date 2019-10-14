import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro';
import Tag from './concert/Tag'
import PropTypes from 'prop-types'
import { KeyboardArrowDown } from 'styled-icons/material/KeyboardArrowDown'
import { DateRange } from 'styled-icons/material/DateRange'
import { Time } from 'styled-icons/boxicons-regular/Time'
import { Heart } from 'styled-icons/fa-regular/Heart'
import { Heart as FullHeart } from 'styled-icons/fa-solid/Heart'
import { Delete } from 'styled-icons/typicons/Delete'
import { Edit } from 'styled-icons/boxicons-regular/Edit'
import concert from './images/concert.jpg'



export default function Popup({
  artist,
  fullDate,
  genres,
  image,
  description,
  isFavorite,
  onHeartClick,
  onDeleteClick,
  _id,
}) {
  Popup.propTypes = {
    artist: PropTypes.string.isRequired,
    fullDate: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    description: PropTypes.string,
    isFavorite: PropTypes.bool,
    onHeartClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
  }


  return (
    <ConcertStyled>
  

      <ConcertImageStyled src={image ? image : concert}/>

      <ConcertInfoStyled>
        <ConcertInfoHeadlineStyled>
          <ArtistStyled>{artist}</ArtistStyled>
          <HeartStyled onClick={onHeartClick}
            active={isFavorite}></HeartStyled>
          <FullHeartStyled onClick={onHeartClick}
            active={!isFavorite}></FullHeartStyled>
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

        
          <ConcertFullInfoStyled>
            <DescriptionStyled>{description}</DescriptionStyled>
            <TagListStyled>{genres.map(genre => genre && <Tag text={genre} key={genre} />)}</TagListStyled>
          </ConcertFullInfoStyled>
       
      </ConcertInfoStyled>
    </ConcertStyled>
  )


  function formatDate(fullDate) {
    const dateString = new Date(fullDate).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    return dateString
  }

  function formatTime(fullDate) {
    const timeString = new Date(fullDate).toLocaleString('de-DE', {
      hour: '2-digit',
      minute: '2-digit'
    })

    return timeString
  }

}

const ConcertStyled = styled.section`
position: relative;
background-color: white;
border-radius: 10px;
box-shadow: 0 2px 4px #CCC2C2;
`
const ConcertImageStyled = styled.img`
width: 100%;
object-fit: cover;
object-position: center;
border-radius: 10px 10px 0 0;
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
color: #E87613;
display: ${props => (props.active ? 'none' : 'block')}
`

const DateContainerStyled = styled.section`
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

const ConcertFullInfoStyled = styled.section`
display: flex;
flex-direction: column;
`

const DescriptionStyled = styled.p`
word-break: break-word;`

const TagListStyled = styled.section`
align-self: center;
`
