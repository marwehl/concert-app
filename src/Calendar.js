import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar () {
  return (
    <FullCalendar
      defaultView="dayGridMonth"
      plugins={[dayGridPlugin, interactionPlugin]}
      weekends={true}
      events={[
        { title: 'event 1', date: '2019-10-01' },
        { title: 'event 2', date: '2019-10-12' }
      ]}
      eventClick={()=> console.log('clicked')}
    />
  )
}