import React from 'react';
import { getAvailabilities } from '@ssense/sscheduler';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Bookings.scss';

const Booking = ({ appointment, setAppointment, book }) => {
    return (
        <form className="booking-form" onSubmit={book}>
            <label>
                First Name:
                <input type="text" name="firstName"/>
            </label>

            <label>
                Last Name:
                <input type="text" name="lastName" />
            </label>

            <label type="datepicker" name="Date">
                Date:
                <DatePicker
                    selected={appointment}
                    onChange={(date) => setAppointment(date)}
                    filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
                    isClearable
                />
            </label>
            <label>
                Event Type:
                <input type="text" name="eventType" />
            </label>
            <label>
                Event Location:
                <input type="text" name="eventLocation" />
            </label>
            <label>
                Event Start Time:
                <input type="time" name="eventStartTime" />
            </label>
            <label>
                Event End Time:
                <input type="time" name="eventEndTime" />
            </label>
            <label>
                About Your Event:
                <textarea name="aboutYourEvent" rows="6" cols="" />
            </label>
            <label>
                Email Address:
                <input type="email" name="emailAddress" />
            </label>
            <button type="submit" value="Submit">Submit</button>
        </form>
    );
};

export default Booking;
