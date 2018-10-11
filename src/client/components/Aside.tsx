import * as React from 'react';

const Aside = ({
  name,
  enname,
  mobile,
  email,
  linkedin,
  languages,
  profiles
}) => (
  <div className="aside">
    <div className="container">
      <h3 className="title">CONTACT</h3>
      <ul>
        <li>
          <span className="label">Name</span>
          <span>
            {name + ' ' + enname}
          </span>
        </li>
        <li>
          <span className="label">Mobile</span>
          <span>
            {mobile}
          </span>
        </li>
        <li>
          <span className="label">Email</span>
          <span>
            <a href={'mailto:'+email}>{email}</a>
          </span>
        </li>
        <li>
          <span className="label">LinkedIn</span>
          <span>
            <a href={linkedin} target="_blank">{linkedin}</a>
          </span>
        </li>
      </ul>
    </div>
  </div>
);

export default Aside;