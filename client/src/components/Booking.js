import { deleteBooking } from "../BookingService";

const Booking = ({booking, removeBooking, handleUpdateBooking}) => {

    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id);
        })
    }


    return (
        <div class="booking">
            <p>Name: {booking.guest_name}</p>
            <p>Email Address: {booking.email_address}</p>
            <p>Status: {booking.checked_in}</p>
            <button id="delbttn" onClick={handleDelete}>   Remove Booking </button>
            <button id="updbttn" onClick={handleUpdateBooking}>   Update Booking </button>
            <hr></hr>
        </div>
    )
}

export default Booking;