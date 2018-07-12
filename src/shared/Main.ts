const Main =  ({
  summary,
  techs,
  skills,
  daily,
  education,
  work,
  projects,
}) => `
  <div class="main">
    <div class="container">
      <h3 class="title">PROFILE</h3>
      <p>${summary}</p>
      <h3 class="title">SKILL</h3>
      <div class="w33">
        ${
          techs.map(item => `
            <h3 class="bar-title">
              ${item.label}
            </h3>
            <ol>
              ${
                item.names.map(skill => `
                  <li>${skill}</li>
                `).join('')
              }
            </ol>
          `).join('')
        }
      </div>
      <hr/>
      <div class="w50">
        ${
          skills.map(item => `
            <div>
              <h4 class="bar-title">
                ${item.name}
              </h4>
              <div class="bar">
                <div class="foo"
                     style="${'width:' + item.score + '%'}">
                </div>
              </div>
              <div class="foo-text">
                ${item.level}
              </div>
            </div>
          `).join('')
        }
      </div>
      <div class="w50">
        <div class="pie">
          <div class="pie-rect rect-1"></div>
          <div class="pie-rect rect-2"></div>
          <div class="pie-rect rect-3"></div>
          <div class="pie pie-text">Daily</div>
        </div>
        <ul class="pie-desc">
          ${
            daily.map(item => `
              <li>
                ${item}
              </li>
            `).join('')
          }
        </ul>
      </div>
      <h3 class="title">EDUCATION</h3>
      ${
        education.map(item => `
          <div class="work">
            <div class="time-flag">
              <span>
                ${item.endDate}
              </span>
              <div class="time-point"></div>
              <p>
                ${item.startDate}
              </p>
            </div>
            <h3 class="label">
              ${item.institution + ' ' +  item.studyType}
            </h3>
            ${
              item.summary ? 
              `<p>${item.summary}</p>` :
              ''
            }
          </div>
        `).join('')
      }
      
      <h3 class="title">WORK</h3>
      ${
        work.map(item => `
          <div class="work">
            <div class="time-flag">
              <span>
                ${item.endDate}
              </span>
              <div class="time-point"></div>
              <p>
                ${item.startDate}
              </p>
            </div>
            <h3 class="label">
              ${item.position}
            </h3>
            <h4 class="label">
              ${item.company}
            </h4>
            ${
              item.summary ?
              `<p>${item.summary}</p>` :
              ''
            }
          </div>
        `).join('')
      }
      <h3 class="title">PROJECTS</h3>
      ${
        projects.map(item => `
          <div class="work">
            <div class="time-flag">
              <span>
                ${item.releaseDate}
              </span>
              <div class="time-point"></div>
              ${
                item.fromDate ?
                `<p>${item.fromDate}</p>` :
                ''
              }
            </div>
            <h3 class="label">
              <a href="${item.website}"
                target="_blank">
                ${item.name} 
              </a>
            </h3>
            <ul>
              ${
                item.highlights.map(highlight => `
                  <li>${highlight}</li>
                `).join('')
              }
            </ul>
          </div>
        
        `).join('')
      }
    </div>
  </div>
`;

export default Main;