import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import * as result from '../../public/resume.json';
import { Header, Aside, Main } from './components';

const resume = result as any;

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 微軟正黑體;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }
`;

export const App: React.FunctionComponent<any> = () => (
    <React.Fragment>
        <GlobalStyle />
        <Header name={resume.basics.name} label={resume.basics.label} />
        <Main
            summary={resume.basics.summary}
            techs={resume.techs}
            skills={resume.skills}
            daily={resume.daily}
            education={resume.education}
            work={resume.work}
            projects={resume.projects}
            milestone={resume.milestone}
        />
        <Aside
            name={resume.basics.name}
            enname={resume.basics.enname}
            mobile={resume.basics.phone}
            email={resume.basics.email}
            linkedin={resume.basics.linkedin}
            languages={resume.languages}
            profiles={resume.basics.profiles}
        />
    </React.Fragment>
);

export default App;
