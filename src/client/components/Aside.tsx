import * as React from 'react';

const Aside = ({
  name,
  enname,
  mobile,
  email,
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
            {email}
          </span>
        </li>
      </ul>
      <h3 className="title">LANGUAGES</h3>
      <ul>
        {
          languages.map((item,index) => 
            <li key={index}>
              <span className="label">
                {item.name}
              </span>
              <span>
                {item.level}
              </span>
            </li>
          )
        }
      </ul>
      <h3 className="title">LINKS</h3>
      {
        profiles.map((item, index) => 
          <a className="btn"
             href="${item.url}"
             target="_blank"
             key={index}>
            {item.network}
          </a> 
        )
      }
    </div>
  </div>
);

export default Aside;