import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; 
import CalendarWrapper from '../calendar/CalendarWrapper'
import PopupContent from "../calendar/PopupContent";

  CalendarPage.propTypes = {
    concerts: PropTypes.arrayOf(PropTypes.object)
  };

export default function CalendarPage ({concerts}) {

const reducedConcerts = concerts.map(concert => {return {date: concert.fullDate.slice(0,10), artist: concert.artist}})
const newEvents = reducedConcerts.map(concert => { return { title: concert.artist, date: concert.date, extendedProps: {id: concert.date}}})
const [showPopup, setShowPopup] = useState(false)
const [selectedConcert, setSelectedConcert] = useState({})

  return (
    <MainStyled>
      <CalendarWrapper>
        <FullCalendar
          concerts={concerts}
          height="auto"
          defaultView="dayGridMonth"
          weekends={true}
          events={newEvents}
          eventClick={handleEventClick}
          plugins={[dayGridPlugin, interactionPlugin]}
        />
      </CalendarWrapper>

      {showPopup && (
        <PopupStyled onClick={togglePopup}>
          <PopupInnerStyled>
            <PopupContent {...selectedConcert} />
          </PopupInnerStyled>
        </PopupStyled>
      )}
    </MainStyled>
  );


function handleEventClick(event){
  const eventDate = event.event.extendedProps.id
  const selectedConcert = concerts.filter(concert => concert.fullDate.slice(0, 10) === eventDate)[0]
  setSelectedConcert(selectedConcert)
  togglePopup(selectedConcert)
}
  
  function togglePopup() {
    setShowPopup(!showPopup);
  }
} 

const PopupStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
  z-index: 3;
  display: flex;
  justify-content: center;
align-items: center;
`

const PopupInnerStyled = styled.div`
  margin: 20px;
  background: rgba(0,0,0, 0.5);
  border-radius: 10px;
`

const MainStyled = styled.main`
padding: 10px;
margin: auto 0;
`
