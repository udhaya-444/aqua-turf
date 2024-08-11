import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TrufBookingSystem.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const TimeSlotSelector = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [bookingMessage, setBookingMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const timeSlots = [
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '01:00 PM - 02:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotChange = (event) => {
    setSelectedTimeSlot(event.target.value);
  };

  const handleSubmit = async () => {
    if (selectedDate && selectedTimeSlot) {
      const timeSlotParts = selectedTimeSlot.split(' - ');
      const startTime = timeSlotParts[0];
      const endTime = timeSlotParts[1];

      const timeData = {
        date: selectedDate.toISOString().split('T')[0], // Format date as YYYY-MM-DD
        timeSlotStart: startTime,
        timeSlotEnd: endTime,
        amount: location.state?.amount || 0, // Assuming amount is passed from previous screen
        login: { id: 1 }, // Replace with the actual user ID or retrieve from context/auth state
        book: { id: 1 } // Replace with the actual book ID or pass it accordingly
      };

      console.log('Time Data being sent:', JSON.stringify(timeData)); // Log the data to inspect it

      try {
        const response = await fetch('http://localhost:8080/api/times/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(timeData)
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Server error: ${errorData.message || 'Unknown error'}`);
        }

        const savedTime = await response.json();
        setBookingMessage(`Booking confirmed for ${savedTime.date} at ${savedTime.timeSlotStart} - ${savedTime.timeSlotEnd}`);
        navigate('/order', { state: { amount: savedTime.amount } });
      } catch (error) {
        console.error('Error saving time slot:', error);
        setBookingMessage(`Error saving time slot: ${error.message}`);
      }
    } else {
      setBookingMessage('Please select both a date and a time slot.');
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    navigate('/selturf');
  };

  if (!isVisible) return null;

  return (
    <div>
      <Navbar />
      <div className="background-containerts">
        <div className="containerts">
          <button className="close-btnts" onClick={handleClose}>&times;</button>
          <h2>Select Date and Time Slot</h2>
          <div>
            <label>Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MMMM d, yyyy"
              className="datepicker"
            />
          </div>
          <div>
            <label>Time Slot:</label>
            <select value={selectedTimeSlot} onChange={handleTimeSlotChange}>
              <option value="">Select a time slot</option>
              {timeSlots.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
          <div>
            <h3>Selected Date: {selectedDate ? selectedDate.toDateString() : 'None'}</h3>
            <h3>Selected Time Slot: {selectedTimeSlot}</h3>
          </div>
          <div>
            <button className="book-now-btnts" onClick={handleSubmit}>Book Now</button>
          </div>
          {bookingMessage && (
            <div className="booking-messagets">
              {bookingMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeSlotSelector;
