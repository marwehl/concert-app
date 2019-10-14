import React, {useState} from 'react'
import Concert from './concert/Concert'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import {
  PopupboxManager,
  PopupboxContainer
} from 'react-popupbox';


export default function Calendar ({concerts}) {

  const [selectedConcert, setSelectedConcert] = useState({})
  const [activeConcert, setActiveConcert] = useState({})

  console.log('selectedConcert', selectedConcert)
  
  const dates = concerts.map(concert => concert.fullDate)
 const slicedDates = dates.map(foo => foo.slice(0,10))

 console.log('concerts',concerts)

  const newEvents = slicedDates.map(slicedDate => { return { title: 'event', date: slicedDate}})

  return (
    <>
    <FullCalendar
      defaultView="dayGridMonth"
      plugins={[dayGridPlugin, interactionPlugin]}
      weekends={true}
      events={newEvents}
      dateClick={(event) => handleClick(event, concerts)}
    />
      <div>
        <button onClick={openPopupbox}>Click me</button>
        <PopupboxContainer/>   
      </div>
     
   
    </>

  )

  function openPopupbox(activeConcert) {
    const content = (
      <Concert
        artist={activeConcert.artist} fullDate={activeConcert.fullDate} description={activeConcert.description} genres={['foo', 'bar']} />
    )
    PopupboxManager.open({ content })
  }


  function handleClick(event, concerts) {
    const eventDate = event.date
   const newDate = eventDate.toISOString().slice(0,10)
  const activeConcert = concerts.filter(concert => concert.fullDate.slice(0,10) === newDate)
  setSelectedConcert(activeConcert)
    console.log('activeConcert', activeConcert)
    
    openPopupbox(activeConcert)

    

  }


}