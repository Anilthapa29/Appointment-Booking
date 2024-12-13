import React, { useState } from 'react';
import './Appointment.css';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';
import AppointmentPicker from './AppointmentPicker';

const Appointment = ({ loggedinUserInfo }) => {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    console.log(appointment);
    setAppointments([...appointments, appointment]);
    console.log(appointments);
  };

  const deleteAppointment = (index) => {
    const deletedAppointments = [...appointments];
    deletedAppointments.splice(index, 1);
    setAppointments(deletedAppointments);
  };

  const editAppointment = (index, editedDate, editedTime) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index] = {
      ...updatedAppointments[index],
      date: editedDate,
      time: editedTime,
    };
    setAppointments(updatedAppointments);
  };

  const clearAppointments = () => {
    setAppointments([]);
  };

  return (
    <div className="appointmentSystem">
      <h1>Appointment Management System</h1>
      <AppointmentForm
        addAppointment={addAppointment}
        loggedinUserInfo={loggedinUserInfo}
      />
      <AppointmentList
        appointments={appointments}
        deleteAppointment={deleteAppointment}
        clearAppointments={clearAppointments}
        editAppointment={editAppointment}
      />
    </div>
  );
};

export default Appointment;
