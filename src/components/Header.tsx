import React from 'react';
import logo from '../assets/stackline_logo.svg';
import './App.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
    </header>
  );
};

export default Header;
