import React from "react";
import { Link } from 'react-router-dom';

const Home = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            <li>
                <Link to="/listings">Listings</Link>
            </li>
        </ul>
    </nav>
);

export default Home
