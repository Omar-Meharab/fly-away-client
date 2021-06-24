import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <a className="navbar-brand ms-5 fw-bold text-dark" href="/">Fly Away</a>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link me-5 text-dark fw-bold" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-5 text-dark fw-bold" href="/booking">Booking</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-5 text-dark fw-bold" href="/login">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;