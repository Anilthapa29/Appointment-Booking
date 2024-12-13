import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AppointmentPicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  const availableTimeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset selected time when date changes
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const isTimeSlotAvailable = (time) => {
    // Logic to check if the time slot is available
    // You'll likely need to fetch this data from your backend
    return true; // Placeholder
  };

  return (
    <div>
      <h2>Schedule an Appointment</h2>

      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()} // Prevent selecting past dates
        dateFormat="MMMM d, yyyy"
      />

      <h3>Available Time Slots</h3>
      <ul>
        {availableTimeSlots.map((time) => (
          <li
            key={time}
            onClick={() => handleTimeChange(time)}
            style={{
              cursor: isTimeSlotAvailable(time) ? 'pointer' : 'default',
              color: isTimeSlotAvailable(time) ? 'black' : 'gray',
            }}
          >
            {time}
          </li>
        ))}
      </ul>

      {selectedTime && (
        <p>
          You have selected {selectedTime} on {selectedDate.toDateString()}.
        </p>
      )}
    </div>
  );
}

export default AppointmentPicker;
