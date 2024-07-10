import React from 'react'
import EventCard from '../../components/EventCard'
import { eventList } from '../../utils/EventDatabase'
import "./EventList.css";
import Navigation from '../../components/Navigation/Navigation';


function EventList() {
 const renderEventCard = () => {
  return eventList.map(({id,heading,date,location,img})=>{
    return (
     
      <EventCard
          key={id}
          id={id}
          date={date}
          heading={heading}
          location={location}
          img={img}
        />
    )
  })

 }

  return (
    <div>
    <Navigation/>
    <div className='event-list-wrapper'>
      <div className='event-list'>
      {eventList.length>0?(renderEventCard()
    ):<p>No Events Availble</p>}
    </div>
   </div>
    </div>
  )
}

export default EventList
