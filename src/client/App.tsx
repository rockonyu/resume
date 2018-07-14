import * as React from 'react';
import {hot} from 'react-hot-loader';
import * as result from '../resume.json';
const resume = (result as any);

import {
  Header,
  Aside,
  Main,
} from './components';

const App = () => (
  <div>
    <Header name={resume.basics.name}
            label={resume.basics.label} />
    <div style={{display:"flex"}}>
      <Aside name={resume.basics.name}
              enname={resume.basics.enname}
              mobile={resume.basics.phone}
              email={resume.basics.email}
              languages={resume.languages}
              profiles={resume.basics.profiles} />
      <Main summary={resume.basics.summary}
            techs={resume.techs}
            skills={resume.skills}
            daily={resume.daily}
            education={resume.education}
            work={resume.work}
            projects={resume.projects} />
    </div>
  </div>
);

export default hot(module)(App);