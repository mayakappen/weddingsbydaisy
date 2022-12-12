import React, { useState } from 'react';
import './App.css';
import Booking from './Bookings/Bookings';
import Navbar from './Navbar/Navbar';
import Homepage from './Homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookings, setBookings] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Get the input values from the form
    const {
      firstName,
      lastName,
      eventType,
      eventLocation,
      eventStartTime,
      eventEndTime,
      aboutYourEvent,
      emailAddress
    } = event.target.elements;

    // Create a new booking object with the input values
    const newBooking = {
      firstName: firstName.value,
      lastName: lastName.value,
      eventType: eventType.value,
      eventLocation: eventLocation.value,
      eventStartTime: eventStartTime.value,
      eventEndTime: eventEndTime.value,
      aboutYourEvent: aboutYourEvent.value,
      emailAddress: emailAddress.value
    };

    // Update the bookings state variable by adding the new booking to the array
    setBookings([...bookings, newBooking]);
    console.log(bookings)
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Wrap your Route components inside a Routes component */}
          <Route path="/" element={<Homepage />} /> 
        
          <Route path="/contact" element={<Booking appointment={selectedDate} setAppointment={setSelectedDate} book={handleSubmit} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

