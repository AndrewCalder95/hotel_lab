const baseURL = 'http://localhost:5000/api/bookings/'

export const getBookings = () => {
    return fetch(baseURL)
    .then(result=>result.json())
}

export const postBooking = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(result => result.json())
}

export const deleteBooking  = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const updateBooking = (id) => {
    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(id),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(result => result.json())
}