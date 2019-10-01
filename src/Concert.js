import React, {useState} from 'react'
import styled from 'styled-components/macro';
import Tag from './Tag'
import PropTypes from 'prop-types'


export default function Concert({ artist, date, place, styles, image }) {

Concert.propTypes = {
  artist : PropTypes.string,
  date: PropTypes.string,
  place: PropTypes.string,
  styles: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string
}

const [fullConcertIsVisible, setFullConcertIsVisible] = useState(false)


function handleArrowClick () {
  setFullConcertIsVisible(!fullConcertIsVisible)
 
}

  return (
    <ConcertStyled>
      <ConcertImageStyled src={image}/>
      <ConcertInfoStyled>
      <ArtistStyled>{artist}</ArtistStyled>
      <TimeStyled>
      <span>{date}</span>
      <span>19:30</span>
      </TimeStyled>
  
      <div>{place}</div>
      <ButtonStyled onClick={handleArrowClick}>Show more</ButtonStyled>
       <TagListStyled>
        {fullConcertIsVisible &&
          <p>{styles.map(style => <Tag text={style}/>)}</p>}
        </TagListStyled>
      </ConcertInfoStyled>
    </ConcertStyled>
  )
}

const ConcertStyled = styled.section`
background-color: white;
border-radius: 10px;

`
const ConcertImageStyled = styled.img`
width: 100%;
border-radius: 10px 10px 0 0;
`

const ConcertInfoStyled = styled.section`
display: flex;
flex-direction: column;
gap: 10px;
padding: 15px;
`
const ArtistStyled = styled.span`
font-size: 1.5em;
`
const TimeStyled = styled.section`
display: flex;
gap: 7px;
`

const ButtonStyled = styled.button`
align-self: center;
font-size: 1em;
padding: 10px;
border-radius: 10px;
`

const TagListStyled = styled.section`
align-self: center;
`




