import * as React from 'react';

const Header = ({
  name,
  label,
}) => (
  <div className="header">
    <p>WEB DEVELOPER</p>
    <h1>{name}</h1>
    <h3>
    <span>{label}</span>
    </h3>
  </div>
);

export default Header;