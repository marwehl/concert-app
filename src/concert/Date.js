import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { formatDate, formatTime } from '../utils.js'
import { DateRange } from 'styled-icons/material/DateRange'
import { Time } from 'styled-icons/boxicons-regular/Time'




export default function Date({fullDate}) {

   Audio.propTypes = {
     fullDate: PropTypes.string
   };

return (
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
  )
}

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