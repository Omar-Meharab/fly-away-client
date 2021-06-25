import React from 'react';

const BookingList = (props) => {
    const { name, price, destination, amountOfSeats } = props.bookings;

    const deleteBook = (id) => {
        fetch(`https://whispering-spire-74091.herokuapp.com/deleteBooking/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result =>  console.log('deleted'))
    }
    
    return (
        <tr>
            <td>{name}</td>
            <td>{destination}</td>
            <td>{amountOfSeats}</td>
            <td>{price}</td>
            <td><button onClick={() => deleteBook(props.bookings._id)} className="btn btn-danger">Delete</button></td>
        </tr>
    );
};

export default BookingList;