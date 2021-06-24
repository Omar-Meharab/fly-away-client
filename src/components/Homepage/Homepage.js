import React from 'react';
import './Homepage.css';
import Navbar from '../Navbar/Navbar';
import Destinations from '../Destinations/Destinations';

const Homepage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1 className="text-center p-5">What Is Your Destination</h1>
            </div>
            <Destinations></Destinations>
        </div>
    );
};

export default Homepage;