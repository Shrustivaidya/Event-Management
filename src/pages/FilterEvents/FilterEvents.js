import React from 'react'
import SerachEventList from '../../components/SerachEventList/SerachEventList'
import FilterBox from '../../components/FilterBox/FilterBox'
import './FilterEvents.css';


function FilterEvents() {
  return (
    <div>
      <h1>FilterEvents</h1>
      <FilterBox/>
      <SerachEventList/>
    </div>
  )
}

export default FilterEvents
