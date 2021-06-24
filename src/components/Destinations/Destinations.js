import React, { useEffect, useState } from 'react';
import DestinationDetail from '../DestinationDetail/DestinationDetail';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch('https://whispering-spire-74091.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => {
                setDestinations(data)
            })
    }, [])

    return (
        <section>
            <div className="d-flex justify-content-center">
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        destinations.map(destinations => <DestinationDetail destinations={destinations} key={destinations._id}></DestinationDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Destinations;