import React, { useEffect, useState } from 'react';
import DestinationDetail from '../DestinationDetail/DestinationDetail';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/destinations')
            .then(res => res.json())
            .then(data => {
                setDestinations(data)
            })
    }, [])

    return (
        <section>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        destinations.map(destinations => <DestinationDetail destinations={destinations} key={destinations._id}></DestinationDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Destinations;