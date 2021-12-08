import { useState } from "react";
import { postBooking } from "../BookingService";

const BookingForm = ({addBooking}) => {

    const [formData, setFormData] = useState({});

    const onChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        postBooking(formData).then((data) => { addBooking(data) })
        e.target.reset();
    }

    return (
        <form onSubmit={onSubmit} id="bookings-form" >
            <div>
                <label htmlFor="guest_name">Name:</label>
                <input onChange={onChange} type="text" id="guest_name" autofocus required/>
            </div>
            <div>
                <label htmlFor="email_address">Email Address:</label>
                <input onChange={onChange} type="text" id="email_address" required/>
            </div>
            <div>
                <label htmlFor="checked_in">Checked-in:</label>
                <input onChange={onChange} type="text" id="checked_in" required/>
            </div>
            <input id="submit_button" type="submit" value="Submit">
            </input>
        </form>
    )

}


export default BookingForm;