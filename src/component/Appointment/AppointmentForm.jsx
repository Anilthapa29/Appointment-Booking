import React, { useState } from 'react';
import lawyerDetails from '../../lawyerDetails';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AppointmentForm = ({ addAppointment, loggedinUserInfo }) => {
  const [areaOfService, setAreaOfService] = useState('');
  const [lawyer, setLawyer] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({
      name: loggedinUserInfo?.name,
      lawyer: lawyer,
      areaOfService: areaOfService,
      date: selectedDate,
      time: selectedTime,
    });
    setAreaOfService('');
    setLawyer('');
  };
  const handleChange = (event) => {
    setAreaOfService(event.target.value);
    setLawyer('');
  };
  const ListOfServices = ['Immigration', 'Marriage', 'Real Estate'];
  const handleChangeOption = (event) => {
    setLawyer(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset selected time when date changes
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const isTimeSlotAvailable = (time) => {
    // Logic to check if the time slot is available
    // You'll likely need to fetch this data from your backend
    return true; // Placeholder
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
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label htmlFor="fname">Area of Service</label>
          </div>
          <div className="col-75">
            <select value={areaOfService} onChange={handleChange}>
              <option value="">Please Select Area of Service</option>
              {ListOfServices.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="fname">Select a Lawyer</label>
          </div>
          <div className="col-75">
            {lawyerDetails
              .filter((details) => details.fieldOfExpertise === areaOfService)
              .map((lawyerItem, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    value={lawyerItem.lawyerName || ''}
                    checked={lawyer === lawyerItem.lawyerName}
                    onChange={handleChangeOption}
                  />
                  {lawyerItem.lawyerName}
                </label>
              ))}
          </div>
        </div>
        {lawyer && (
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">Appointment Date: </label>
            </div>
            <div className="col-75">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                minDate={new Date()} // Prevent selecting past dates
                filterDate={filterWeekends}
                dateFormat="MMMM d, yyyy"
              />
              <select value={selectedTime} onChange={handleTimeChange}>
                <option value="">Available Time Slots</option>
                {lawyerDetails
                  .find((lawyerItem) => lawyerItem.lawyerName === lawyer)
                  .timeAvailable.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        )}
        <div className="row">
          <input type="submit" value="Add Appointment" />
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
