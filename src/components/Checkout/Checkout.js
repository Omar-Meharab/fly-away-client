import './Checkout.css';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Dashboard/Sidebar/Sidebar';


const CheckOut = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [orderData, setOrderData] = useState(null);
    const { id } =useParams();
    const [service, setService] = useState({});
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
        fetch('https://vast-hollows-78144.herokuapp.com/addOrder', {
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
        history.push(`/orders`);
    }

    fetch(`https://vast-hollows-78144.herokuapp.com/service/${id}`)
    .then(res => res.json())
    .then(data => setService(data))
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section>
            <Sidebar></Sidebar>
            <div className="col-md-10 col-sm-10 ms-auto checkout">
                <div style={{display: orderData ? 'none' : 'block'}} className="col-md-6 col-sm-6 mx-auto pt-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="name" />
                        {errors.exampleRequired && <span className="error">Name is required</span>}

                        <input name="email" defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="email" />
                        {errors.exampleRequired && <span className="error">Name is required</span>}
                        
                        <input name="service" defaultValue={service.service} {...register("service", { required: true })} placeholder="service" />
                        {errors.exampleRequired && <span className="error">Name is required</span>}
                        
                        <input name="price" defaultValue={service.price} {...register("price", { required: true })} placeholder="price" />
                        {errors.exampleRequired && <span className="error">Name is required</span>}

                        <input name="address" {...register("address", { required: true })} placeholder="address" />
                        {errors.exampleRequired && <span className="error">Name is required</span>}

                        <input name="phone" {...register("phone", { required: true })} placeholder="phone" />
                        {errors.exampleRequired && <span className="error">Name is required</span>}

                        <input className="btn btn-primary" type="submit" />
                    </form>
                </div>
                <div style={{display: orderData ? 'block' : 'none'}} className="col-md-6 col-sm-6 mx-auto py-5 payment-container">
                    <h2>Your Card Details</h2>
                    <ProcessPayment className="mx-auto" handlePayment={handlePaymentSuccess}></ProcessPayment>
                </div>
            </div>
        </section>
    );
};

export default CheckOut;