const Aside = ({name, enname, mobile, email, languages, profiles}) => `
  <div class="aside">
    <div class="container">
      <h3 class="title">CONTACT</h3>
      <ul>
        <li>
          <span class="label">Name</span>
          <span>
            ${name + ' ' + enname}
          </span>
        </li>
        <li>
          <span class="label">Mobile</span>
          <span>
            ${mobile}
          </span>
        </li>
        <li>
          <span class="label">Email</span>
          <span>
            ${email}
          </span>
        </li>
      </ul>
      <h3 class="title">LANGUAGES</h3>
      <ul>
        ${
          languages.map(item => `
            <li>
              <span class="label">
                ${item.name}
              </span>
              <span>
                ${item.level}
              </span>
            </li>
          `).join('')
        }
      </ul>
      <h3 class="title">LINKS</h3>
      ${
        profiles.map(item => `
          <a class="btn" href="${item.url}" target="_blank">
            ${item.network}
          </a> 
        `).join('')
      }
    </div>
  </div>
`;

export default Aside;