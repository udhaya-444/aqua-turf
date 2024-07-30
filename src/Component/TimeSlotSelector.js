import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TrufBookingSystem.css';
import { useNavigate } from 'react-router-dom';

const TimeSlotSelector = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [bookingMessage, setBookingMessage] = useState('');
  const navigate = useNavigate();

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

  const handleSubmit = () => {
    if (selectedDate && selectedTimeSlot) {
      setBookingMessage(`Booking confirmed for ${selectedDate.toDateString()} at ${selectedTimeSlot}`);
      navigate('/order');
    } else {
      setBookingMessage('Please select both a date and a time slot.');
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
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
  );
};

export default TimeSlotSelector;
