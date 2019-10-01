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
const [arrowRotation, setArrowRotation] = useState(90)

function handleArrowClick () {
  setFullConcertIsVisible(!fullConcertIsVisible)
  setArrowRotation(arrowRotation + 180)
}

  return (
    <ConcertStyled>
      <ImageStyled src={image}/>
      <ConcertInfoStyled>
      <ArtistStyled>{artist}</ArtistStyled>
      <TimeStyled>
          <CalenderIconStyled src="https://img.icons8.com/ios/50/000000/calendar.png"/>
      <p>{date}</p>
      <p>19:30</p>
      </TimeStyled>
      <PlaceStyled>
      <h4>{place}</h4>
      </PlaceStyled>
      <ArrowDownStyled onClick={handleArrowClick} arrowRotation={arrowRotation}>&raquo;</ArrowDownStyled>
       <TagListStyled>
        {fullConcertIsVisible &&
          <p>{styles.map(style => <Tag text={style}/>)}</p>}
        </TagListStyled>
      </ConcertInfoStyled>
    </ConcertStyled>
  )
}


const ConcertStyled = styled.section`
border-radius: 10px;
border: none;
background-color: white;
`

const ConcertInfoStyled = styled.section`
padding: 3px 20px;
`

const ArtistStyled = styled.h2`
font-weight: bold;
margin: 10px;
`
const TimeStyled = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin: 10px;
gap: 7px;`

const PlaceStyled = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin: 10px;
gap: 7px;
margin: -30px 10px;
`

const CalenderIconStyled = styled.img`
color: #dbdfec;
height: 20px;
`

const ArrowDownStyled = styled.h2`
margin: 5px;
height: 20px;
text-align: center;
font-size: 3em;
transform: rotate(${props => (props.arrowRotation + 'deg') })
`

//const ArrowUpStyled = styled.h2`
//transform: rotate(270deg);
//height: 20px;
//text-align: center;
//font-size: 3em;
//`
const TagListStyled = styled.section`
display: flex;
justify-content: center;
`

const ImageStyled = styled.img`
width: 100%;
border-radius: 10px 10px 0 0;
`


