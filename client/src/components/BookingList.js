import Booking from "./Booking"

const BookingList = ({ bookings, removeBooking, handleUpdateBooking}) => {
    
    const bookingsNodes = bookings.map((booking) => {
        return <Booking booking={booking} key={booking._id} removeBooking={removeBooking} handleUpdateBooking={handleUpdateBooking} />
    }
    )

    return (
        <>
        { bookingsNodes }
        </>
    );

}


export default BookingList;