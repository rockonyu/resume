import * as React from 'react';
import {hot} from 'react-hot-loader';
import * as result from '../resume.json';
const resume = (result as any);

import {
  Header,
  Aside,
  Main,
} from './components';

export const App = () => (
  <div>
    <Header name={resume.basics.name}
            label={resume.basics.label}
    />
    <Main summary={resume.basics.summary}
          techs={resume.techs}
          skills={resume.skills}
          daily={resume.daily}
          education={resume.education}
          work={resume.work}
          projects={resume.projects}
          milestone={resume.milestone}
    />
    <Aside name={resume.basics.name}
           enname={resume.basics.enname}
           mobile={resume.basics.phone}
           email={resume.basics.email}
           linkedin={resume.basics.linkedin}
           languages={resume.languages}
           profiles={resume.basics.profiles}
    />
  </div>
);

export default hot(module)(App);