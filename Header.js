import React from 'react';
import './Header.css';
import { RxAvatar } from "react-icons/rx";
import Login from "./user.png"

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                {/* <img src="/path/to/logo1.png" alt="Left Logo" className="logo" /> */}
                <div className="logo"><a href="#">Lo<span>go.</span></a></div>
            </div>
            <div className="header-right">
                {/* <RxAvatar /> */}
                <img src={Login} alt="Right Logo" className="logo" />
            </div>
        </header>
    );
};

export default Header;
