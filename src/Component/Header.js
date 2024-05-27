import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h1>My Landing Page</h1>
                    <nav>
                        <a href="#home">Home</a>
                        <a href="#features">Features</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
