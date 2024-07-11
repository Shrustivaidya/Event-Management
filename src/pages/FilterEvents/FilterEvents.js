import React from 'react'
import SearchEventList from '../../components/SerachEventList/SearchEventList'
import FilterBox from '../../components/FilterBox/FilterBox'
import './FilterEvents.css';


function FilterEvents() {
  return (
    <div>
      <h1>FilterEvents</h1>
      <FilterBox/>
      <SearchEventList/>
    </div>
  )
}

export default FilterEvents
