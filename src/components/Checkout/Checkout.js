import './Checkout.css';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Navbar from '../Navbar/Navbar';
import Seats from '../Seats/Seats';


const CheckOut = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [orderData, setOrderData] = useState(null);
    const { id } = useParams();
    const [destination, setDestination] = useState({});
    const history = useHistory();

    const onSubmit = data => {
        setOrderData(data);
    }

    const handlePaymentSuccess = paymentId => {
        const order = {
            ...loggedInUser,
            ...orderData,
            paymentId
        };
        fetch('https://whispering-spire-74091.herokuapp.com/addBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    alert('your order placed successfully');
                }
            })
        history.push(`/bookings`);
    }

    fetch(`https://whispering-spire-74091.herokuapp.com/destinations/${id}`)
        .then(res => res.json())
        .then(data => setDestination(data))

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section>
            <Navbar />
            <div className="row d-flex">
                <div className="col-md-6 mt-5 pt-5 text-center">
                    <div style={{ display: orderData ? 'none' : 'block' }} className="col-md-6 col-sm-6 mx-auto pt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="m-1 px-5 py-1" name="name" defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="name" />
                            <br />
                            {errors.name && <span className="bg-danger text-white">Name is required</span>}
                            <br />
                            <input className="m-1 px-5 py-1" name="email" defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="email" />
                            <br />
                            {errors.email && <span className="bg-danger text-white">Email is required</span>}
                            <br />
                            <input className="m-1 px-5 py-1" name="destination" defaultValue={destination.name} {...register("destination", { required: true })} placeholder="destination" />
                            <br />
                            {errors.destination && <span className="bg-danger text-white">Destination is required</span>}
                            <br />
                            <input className="m-1 px-5 py-1" name="price" defaultValue={destination.price} {...register("price", { required: true })} placeholder="price" />
                            <br />
                            {errors.price && <span className="bg-danger text-white">Price is required</span>}
                            <br />
                            <input className="m-1 px-5 py-1" name="Amount of seats" {...register("amountOfSeats", { required: true, max: 5 })} placeholder="amount of seats" />
                            <br />
                            {errors.amountOfSeats && <span className="bg-danger text-white">No more than 5 seats can be taken</span>}
                            <br />
                            <input className="m-1 px-5 py-1" name="total" {...register("total", { required: true })} placeholder="total" />
                            <br />
                            {errors.total && <span className="bg-danger text-white">Total is required</span>}
                            <br />
                            <input className="m-1 px-5 py-1" name="address" {...register("address", { required: true })} placeholder="address" />
                            <br />
                            {errors.address && <span className="bg-danger text-white">Address is required</span>}
                            <br />
                            <input className="m-1 px-5 py-1" name="phone" {...register("phone", { required: true })} placeholder="phone" />
                            <br />
                            {errors.phone && <span className="bg-danger text-white">Phone Number is required</span>}
                            <br />
                            <input className="m-1 px-5 py-1" className="btn btn-primary" type="submit" />
                        </form>
                    </div>
                    <div style={{ display: orderData ? 'block' : 'none' }} className="col-md-6 col-sm-6 mx-auto py-5 payment-container">
                        <h2>Your Card Details</h2>
                        <ProcessPayment className="mx-auto" handlePayment={handlePaymentSuccess}></ProcessPayment>
                    </div>
                </div>
                <div className="col-md-6 m-0 p-0">
                    <Seats />
                </div>
            </div>
        </section>
    );
};

export default CheckOut;