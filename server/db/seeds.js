use guests;
db.dropDatabase();

db.bookings.insertMany([
    {
        guest_name: "Aga",
        email_address: "agnieszka.koltun@ros.gov.uk",
        checked_in: true
    },
    {
        guest_name: "Andrew",
        email_address: "andrew.calder@ros.gov.uk",
        checked_in: true
    },
]);