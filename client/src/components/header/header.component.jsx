// Import
import React from 'react';
import { Link } from 'react-router-dom';

// Import - Components
import GoogleAuth from 'components/google-auth/google-auth.component';

// ----------------------------------------------------------------------------------------- //

const Header = () => (
  <div
    className="ui secondary pointing menu"
    style={{ fontSize: '1.4rem', letterSpacing: '0.2rem' }}
  >
    <Link to="/" className="item">
      Streamy
    </Link>
    <div className="right menu">
      <Link to="/" className="item">
        All Streams
      </Link>
      <GoogleAuth />
    </div>
  </div>
);

export default Header;
