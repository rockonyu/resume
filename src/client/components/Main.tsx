import * as React from 'react';

const Main = ({
  summary,
  techs,
  skills,
  daily,
  education,
  work,
  projects,
}) => (
  <div className="main">
    <div className="container">
      <h3 className="title">PROFILE</h3>
      <p>{summary}</p>
      <h3 className="title">SKILL</h3>
      <div className="w33">
        {
          techs.map(item => (
            <div key={item.label}>
              <h3 className="bar-title">
                {item.label}
              </h3>
              <ol>
                {
                  item.names.map((skill, index) => 
                    <li key={skill}>{skill}</li>
                  )
                }
              </ol>
            </div>
          ))
        }
      </div>
      <hr/>
      <div className="w50">
        {
          skills.map((item, index) => (
            <div key={item.name}>
              <h4 className="bar-title">
                {item.name}
              </h4>
              <div className="bar">
                <div className="foo"
                     style={{width: item.score + '%'}}>
                </div>
              </div>
              <div className="foo-text">
                {item.level}
              </div>
            </div>
          ))
        }
      </div>
      <div className="w50">
        <div className="pie">
          <div className="pie-rect rect-1"></div>
          <div className="pie-rect rect-2"></div>
          <div className="pie-rect rect-3"></div>
          <div className="pie pie-text">Daily</div>
        </div>
        <ul className="pie-desc">
          {
            daily.map(item => (
              <li key={item}>
                ${item}
              </li>
            ))
          }
        </ul>
      </div>
      <h3 className="title">EDUCATION</h3>
      {
        education.map((item, index) => (
          <div className="work" key={index}>
            <div className="time-flag">
              <span>
                {item.endDate}
              </span>
              <div className="time-point"></div>
              <p>
                {item.startDate}
              </p>
            </div>
            <h3 className="label">
              {item.institution + ' ' +  item.studyType}
            </h3>
            {
              item.summary ? <p>{item.summary}</p> : ''
            }
          </div>
        ))
      }
      
      <h3 className="title">WORK</h3>
      {
        work.map((item, index) => (
          <div className="work" key={index}>
            <div className="time-flag">
              <span>
                {item.endDate}
              </span>
              <div className="time-point"></div>
              <p>
                {item.startDate}
              </p>
            </div>
            <h3 className="label">
              {item.position}
            </h3>
            <h4 className="label">
              {item.company}
            </h4>
            {
              item.summary ? <p>${item.summary}</p> : ''
            }
          </div>
        ))
      }
      <h3 className="title">PROJECTS</h3>
      {
        projects.map((item, index) => (
          <div className="work" key={index}>
            <div className="time-flag">
              <span>
                {item.releaseDate}
              </span>
              <div className="time-point"></div>
              {
                item.fromDate ? <p>${item.fromDate}</p> : ''
              }
            </div>
            <h3 className="label">
              <a href={item.website}
                target="_blank">
                {item.name}
              </a>
            </h3>
            <ul>
              {
                item.highlights.map(highlight => 
                  <li key={highlight}>${highlight}</li>
                )
              }
            </ul>
          </div>
        ))
      }
    </div>
  </div>
);

export default Main;