import React from 'react';
import { useHistory } from 'react-router-dom';

const DestinationDetail = (props) => {
    const { name, imageURL, price, _id } = props.destinations;
    const history = useHistory();
    const handleOrder = (id) => {
        history.push(`/checkout/${id}`);
    }
    return (
        <div className="col p-4 text-center g-4">
            <div className="card m-5 p-5">
                <img className="m-3 p-3"  src={imageURL} alt="" />
                <h5 className="mt-3 mb-3">{name}</h5>
                <p className="text-secondary">Your first order will have 10% discount. Which one do you need? Just tell Us</p>
                <p className="text=danger fs-bold">{price}</p>
                <button onClick={() => handleOrder(_id)} className="btn btn-warning text-white m-3">Order Now</button>
            </div>
        </div>
    );
};

export default DestinationDetail;