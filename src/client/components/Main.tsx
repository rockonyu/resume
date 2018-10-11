import * as React from 'react';

const Main = ({
  summary,
  techs,
  skills,
  daily,
  education,
  work,
  projects,
  milestone,
}) => (
  <div className="container main">
      <h3 className="title">SUMMARY</h3>
      <p>{summary}</p>
      <h3 className="title">SKILL</h3>
      <div>
        {
          skills.map((item, index) => (
            <span className="tag" key={index}>
              {item}
            </span>
          ))
        }
      </div>
      <h3 className="title">MILESTONE</h3>
      {
          milestone.map((item, index) => (
            <div className="work" key={index}>
              <div className="time-flag">
                <span>
                  {item.to}
                </span>
                <div className="time-point"></div>
                <p>{item.from}</p> 
              </div>
              <h3 className="label">
                {item.name} - {item.title}
              </h3>
              <ul>
                {
                  item.projects.map(item => 
                    <li key={item}>{item}</li>
                  )
                }
              </ul>
            </div>
          ))
      }
    </div>
);

export default Main;