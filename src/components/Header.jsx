import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to='Submit'>Submit</Link>
      <Link to='/'>Home</Link>
    </div>
  );
}



export default Header;
