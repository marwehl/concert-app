import React, {useState} from 'react'
import styled from 'styled-components/macro';
import Tag from './Tag'
import PropTypes from 'prop-types'
import { AngleDoubleDown } from 'styled-icons/fa-solid/AngleDoubleDown'
import { DateRange } from 'styled-icons/material/DateRange'
import { Place } from 'styled-icons/material/Place'
 

export default function Concert({ 
  artist, 
  date, 
  place, 
  styles, 
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
  //styles: PropTypes.arrayOf(PropTypes.string),
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
      <StarStyled onClick={toggleIsFavorite}
      active={isFavorite}
      aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></StarStyled>

      <ConcertInfoStyled>
      <ArtistStyled>{artist}</ArtistStyled>
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
        <AngleDoubleDownStyled 
        active={arrowShowsDown}
        onClick={handleArrowClick}/>
        {fullConcertIsVisible &&
    <ConcertFullInfoStyled>
          <p>{description}</p>
          <TagListStyled>{styles.map(style => <Tag text={style} />)}</TagListStyled>
        </ConcertFullInfoStyled>
          }
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

const StarStyled = styled.svg`
position: absolute;
top: -25px;
right: 15px;
width: 60px;
color: ${props => (props.active ? '#44D7B6' : 'white')};
`

const ConcertInfoStyled = styled.section`
display: flex;
flex-direction: column;
gap: 10px;
padding: 15px 30px 15px 15px;
`
const ArtistStyled = styled.span`
font-size: 1.5em;
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




