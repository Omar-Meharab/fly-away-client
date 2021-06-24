import React from 'react';
import { useEffect, useState } from 'react';
import BookingList from '../Bookings/BookingList';
import Navbar from '../Navbar/Navbar';

const Bookings = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://whispering-spire-74091.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div>
            <Navbar />
            <div className="table-div m-5 bg-light">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(bookings => <BookingList key={bookings._id} bookings={bookings}> </BookingList>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;