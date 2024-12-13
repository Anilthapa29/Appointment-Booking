import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AppointmentList = ({
  appointments,
  deleteAppointment,
  editAppointment,
  clearAppointments,
}) => {
  const [editedIndex, setEditedIndex] = useState(null);
  const [editedDate, setEditedDate] = useState('');
  const [editedTime, setEditedTime] = useState('');

  const handleEdit = (index) => {
    setEditedIndex(index);
    setEditedDate(appointments[index].date);
    setEditedTime(appointments[index].time);
  };

  const handleSaveEdit = (index) => {
    editAppointment(index, editedDate, editedTime);
    setEditedIndex(null);
  };

  const handleCancelEdit = () => {
    setEditedIndex(null);
  };

  function isWeekendDay1(date) {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
  }

  const isWeekendDay = (date) => {
    return isWeekendDay1(date);
  };
  const filterWeekends = (date) => {
    return !isWeekendDay(date);
  };
  const handleDateChange = (date) => {
    setEditedDate(date);
    setEditedTime(''); // Reset selected time when date changes
  };

  return (
    <div className="container">
      <h1>Appointment List</h1>
      <table id="list">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Lawyer</th>
            <th>Area of Service</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{appointment.name}</td>
              <td>{appointment.lawyer}</td>
              <td>{appointment.areaOfService}</td>
              <td>
                {editedIndex === index ? (
                  <DatePicker
                    selected={editedDate}
                    onChange={handleDateChange}
                    minDate={new Date()} // Prevent selecting past dates
                    filterDate={filterWeekends}
                    dateFormat="MMMM d, yyyy"
                  />
                ) : (
                  new Date(appointment.date).toDateString()
                )}
              </td>
              <td>
                {editedIndex === index ? (
                  <input
                    type="time"
                    value={editedTime}
                    onChange={(e) => setEditedTime(e.target.value)}
                  />
                ) : (
                  appointment.time
                )}
              </td>
              <td>
                {editedIndex === index ? (
                  <>
                    <button onClick={() => handleSaveEdit(index)}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => deleteAppointment(index)}>
                      Cancel
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={clearAppointments}>Clear All Appointments</button>
    </div>
  );
};

export default AppointmentList;
