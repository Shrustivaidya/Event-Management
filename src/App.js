import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventDetails from './pages/EventDetails/EventDetails';
import EventList from './pages/EventList/EventList';
import FilterEvents from './pages/FilterEvents/FilterEvents';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/FilterEvents" element={<FilterEvents />} />
      
      </Routes>
    </Router>
  );
}

export default App;
