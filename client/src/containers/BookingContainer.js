import { useState, useEffect } from "react";
import { getBookings } from "../BookingService";
import BookingForm from "../components/BookingForm";
import BookingList from "../components/BookingList";

const BookingContainer = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getBookings()
            .then((allBookings) => {
            setBookings(allBookings)
        })
    }, [])
    

    const addBooking = (booking) => {
        const temp = bookings.map(b => b);
        temp.push(booking)
        setBookings(temp)
    }

    const removeBooking = (id) => {
        const temp =  bookings.map(b=>b);
        const indexToDelete = temp.map(b=>b._id).indexOf(id);
        temp.splice(indexToDelete, 1);
        setBookings(temp);
    }

    const updateBooking = (id) => {
        const temp = bookings.map(b=>b);
        const indexToUpdate = temp.map(b=>b._id).indexOf(id);
        temp.push(indexToUpdate, 1)
        setBookings(temp)
    }

    return (
        <>
            <div class="form_container">
            <h2> Add a booking </h2>
            <BookingForm addBooking={addBooking} />
            </div>
            <div class="booking_container">
                <BookingList bookings={bookings} removeBooking={removeBooking} />
                </div>
        </>
    )
}

export default BookingContainer;