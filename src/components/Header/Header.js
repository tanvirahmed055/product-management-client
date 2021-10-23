import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/manageProducts">Manage Products</Link>
                <Link to="/addProduct">Add Product</Link>
            </nav>
        </div>
    );
};

export default Header;