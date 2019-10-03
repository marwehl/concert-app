import React, {useState} from 'react'
import styled from 'styled-components/macro';
import Tag from './Tag'
import PropTypes from 'prop-types'
import { AngleDoubleDown } from 'styled-icons/fa-solid/AngleDoubleDown'
import { DateRange } from 'styled-icons/material/DateRange'
import { Place } from 'styled-icons/material/Place'
import { Heart } from 'styled-icons/feather/Heart'
import { Heart as FullHeart} from 'styled-icons/fa-solid/Heart'
 

export default function Concert({ 
  artist, 
  date, 
  place, 
  genres, 
  image, 
  description,
  isFavorite,
  toggleIsFavorite
}) 
{
Concert.propTypes = {
  artist : PropTypes.string,
  date: PropTypes.string,
  place: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  description: PropTypes.string,
  isFavorie: PropTypes.bool,
  toggleIsFavorite: PropTypes.func
}

const [fullConcertIsVisible, setFullConcertIsVisible] = useState(false)
const [arrowShowsDown, setArrowShowsDown] = useState(false)

  return (
    <ConcertStyled>
      <ConcertImageStyled src={image}/>
    
      <ConcertInfoStyled>
        <ConcertInfoHeadlineStyled>
      <ArtistStyled>{artist}</ArtistStyled>
        <HeartStyled onClick={toggleIsFavorite}
        active={isFavorite}></HeartStyled>
        <FullHeartStyled onClick={toggleIsFavorite}
        active={!isFavorite}></FullHeartStyled>
        </ConcertInfoHeadlineStyled>

      <TimeStyled>
        <div>
          <DateRangeStyled />
      <span>{date}</span>
        </div>
        <div>
            <PlaceStyled />
      <span>{place}</span>
          </div>
      </TimeStyled>
        {fullConcertIsVisible &&
          <ConcertFullInfoStyled>
            <p>{description}</p>
            <TagListStyled>{genres.map(genre => <Tag text={genre} />)}</TagListStyled>
          </ConcertFullInfoStyled>
        }
        <AngleDoubleDownStyled 
        active={arrowShowsDown}
        onClick={handleArrowClick}/>
      </ConcertInfoStyled>
    </ConcertStyled>
  )

  function handleArrowClick() {
    setFullConcertIsVisible(!fullConcertIsVisible)
    setArrowShowsDown(!arrowShowsDown)
  }
  
}

const ConcertStyled = styled.section`
position: relative;
background-color: white;
border-radius: 10px;

`
const ConcertImageStyled = styled.img`
//position: relative;
width: 100%;
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
display: ${props => (props.active ? 'none' : 'block')}
`

const TimeStyled = styled.section`
display: flex;
justify-content: space-between;
gap: 7px;
`

const DateRangeStyled = styled(DateRange)`
width: 18px;
margin: 0 5px 5px;
`

const PlaceStyled = styled(Place)`
width: 18px;
margin: 0 5px 5px;
`

const AngleDoubleDownStyled = styled(AngleDoubleDown)`
width: 20px;
align-self: center;
transform: rotate(${props => (props.active ? '180deg' : '0')})
`

const ConcertFullInfoStyled = styled.section`
display: flex;
flex-direction: column;
`

const TagListStyled = styled.section`
align-self: center;
`




