import React from 'react';

const BookingList = (props) => {
    const { name, price, destination } = props.bookings;

    const deleteBook = (id) => {
        fetch(`http://localhost:5000/deleteBooking/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result =>  console.log('deleted'))
    }
    
    return (
        <tr>
            <td>{name}</td>
            <td>{destination}</td>
            <td>{price}</td>
            <td><button onClick={() => deleteBook(props.bookings._id)} className="btn btn-danger">Delete</button></td>
        </tr>
    );
};

export default BookingList;