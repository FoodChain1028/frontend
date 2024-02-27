import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48 0 A48 48 0 0 1 0 48 L0 0 Z" fill="#E8A87C" />
                    <path d="M48 48 A100 100 0 0 1 0 48 L0 0 Z" fill="#E27D60" />
                </svg>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/user">User</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/setting">Setting</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link disabled" to="/contact">Contact Us</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-dark" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default HomeNav;
