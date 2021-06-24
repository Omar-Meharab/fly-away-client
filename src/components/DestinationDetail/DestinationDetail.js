import React from 'react';
import { useHistory } from 'react-router-dom';

const DestinationDetail = (props) => {
    const { destination, imageURL, price, _id } = props.destinations;
    const history = useHistory();
    const handleOrder = (id) => {
        history.push(`/checkout/${id}`);
    }
    return (
        <div className="animation col-md-3 text-center shadow-sm mx-auto m-3">
            <img style={{height: '100px'}} src={imageURL} alt="" />
            <h5 className="mt-3 mb-3">{destination}</h5>
            <p className="text-secondary">Your first order will have 10% discount. Which one do you need? Just tell Us</p>
            <p className="text=danger fs-bold">{price}</p>
            <button onClick={() => handleOrder(_id)} className="btn btn-warning text-white m-3">Order Now</button>
        </div>
    );
};

export default DestinationDetail;