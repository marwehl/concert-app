import React, {useState} from 'react'
import styled from 'styled-components/macro';
import Tag from './Tag'
import PropTypes from 'prop-types'


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
  styles: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  description: PropTypes.string,
  isFavorie: PropTypes.bool,
  toggleIsFavorite: PropTypes.func
}

const [fullConcertIsVisible, setFullConcertIsVisible] = useState(false)


function handleArrowClick () {
  setFullConcertIsVisible(!fullConcertIsVisible)
 
}

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
          <IconStyled aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar-alt" class="svg-inline--fa fa-calendar-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></IconStyled>
      <span>{date}</span>
        </div>
        <div>
            <IconStyled aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></IconStyled>
      <span>{place}</span>
          </div>
      </TimeStyled>
  
      <ButtonStyled onClick={handleArrowClick}>Show more</ButtonStyled>
        {fullConcertIsVisible &&
    <ConcertFullInfoStyled>
          <p>{description}</p>
        <TagListStyled>{styles.map(style => <Tag text={style} />)}</TagListStyled>
        </ConcertFullInfoStyled>
          }
      </ConcertInfoStyled>
    </ConcertStyled>
  )
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
top: 15px;
right: 15px;
width: 40px;
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

const IconStyled = styled.svg`
width: 12px;
margin: 0 5px;
`

const ButtonStyled = styled.button`
align-self: center;
font-size: 1em;
padding:  5px 10px;
border-radius: 10px;
`
const ConcertFullInfoStyled = styled.section`
display: flex;
flex-direction: column;
`

const TagListStyled = styled.section`
align-self: center;
`




