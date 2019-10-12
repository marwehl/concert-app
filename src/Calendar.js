import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar ({concerts}) {
  
  const dates = concerts.map(concert => concert.fullDate)
 const slicedDates = dates.map(foo => foo.slice(0,10))

 console.log('concerts',concerts)

  const newEvents = slicedDates.map(slicedDate => { return { title: 'event', date: slicedDate}})
  const newDate = "2019-10-10T19:00:00.000Z"
  const selectedConcert = concerts.filter(concert => concert.fullDate === newDate)

  console.log(selectedConcert)

  return (
    <FullCalendar
      defaultView="dayGridMonth"
      plugins={[dayGridPlugin, interactionPlugin]}
      weekends={true}
      events={newEvents}
      dateClick={(event) => handleClick(event, concerts)}
    />
  )

  function handleClick(event, concerts) {
    const eventDate = event.date
   const newDate = eventDate.toISOString().slice(0,10)
  const selectedConcert = concerts.filter(concert => concert.fullDate.slice(0,10) === newDate)
  console.log(event)
  console.log(eventDate)
  console.log(newDate)
  console.log(selectedConcert)
  }


}