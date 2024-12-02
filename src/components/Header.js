import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const Header = () => {
    // Inline style object for the circular logo
    const logoStyle = {
        width: "80px", // Adjust size
        height: "80px", // Match width to make it a perfect square
        borderRadius: "50%", // Makes the image circular
        objectFit: "cover", // Ensures the image scales properly
        border: "2px solid #ccc", // Optional: Adds a border
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" // Optional: Adds a subtle shadow
    };

    return (
        <header>
            {/* Logo */}
            <img 
                src="/m.png" 
                alt="Faculty Collaboration Logo" 
                className="logo" 
                style={logoStyle} // Apply inline styles
            />
            <h1>Faculty Collaboration Platform</h1>

            {/* Navigation */}
            <nav>
                <ul>
                    {/* Navigation links */}
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/register/login"><i className="fas fa-user"></i> Register/Login</Link></li>
                    <li><Link to="/events"><i className="fas fa-calendar-alt"></i> Events</Link></li>
                    <li><Link to="/question-paper"><i className="fas fa-file-alt"></i> Question Papers</Link></li>
                    <li><Link to="/file-sharing"><i className="fas fa-share-alt"></i> File Sharing</Link></li> {/* Correct Link */}
                    <li><Link to="/resources"><i className="fas fa-book"></i> Resources</Link></li>
                    <li><Link to="#faculty-profiles"><i className="fas fa-user-graduate"></i> Profiles</Link></li>
                </ul>
            </nav>

            {/* Search Section */}
            <div className="search-container">
                <input type="text" placeholder="Search..." id="search-bar" />
                <button id="search-button"><i className="fas fa-search"></i> Search</button>
            </div>
        </header>
    );
};

export default Header;
