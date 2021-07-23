import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink style={{ marginRight: '10px' }} to="/">
        Home
      </NavLink>
      <NavLink style={{ marginRight: '10px' }} to="/about">
        About
      </NavLink>
      <NavLink style={{ marginRight: '10px' }} to="/services">
        Services
      </NavLink>
      <NavLink style={{ marginRight: '10px' }} to="/contact">
        Contact
      </NavLink>
    </div>
  );
}

export default NavBar;