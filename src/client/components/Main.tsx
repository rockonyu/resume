import * as React from 'react';
import styled from 'styled-components';

const MainSection = styled.div`
    background-color: white;
    margin: 0 auto;
    padding: 0 1.5rem;
    max-width: 820px;
`;
const Title = styled.h3`
    border-bottom: solid 1px #2f393b;
    padding-bottom: 0.5em;
    padding-top: 1em;
    letter-spacing: 5px;
`;
const Tag = styled.span`
    display: inline-block;
    background-color: #2f393b;
    color: white;
    margin: 5px;
    padding: 3px 5px;
`;
const Summary = styled.p`
    line-height: 1.7em;
    white-space: pre-line;
`;
const JobSection = styled.div`
    border-left: solid 3px #ececec;
    padding: 0 0 1em 2em;
    margin-left: 70px;
    top: 10px;
    position: relative;

    @media (max-width: 767px) {
        margin: 0;
        border: none;
        padding: 0;
        padding-bottom: 1em;
    }
`;
const Label = styled.h3`
    margin: 0;
    padding-bottom: 0.5em;
    letter-spacing: 2px;

    @media (max-width: 767px) {
        margin-left: 2em;
    }
`;
const ProjectList = styled.ul`
    padding-left: 1.5em;
    margin-top: 0;
`;
const ProjectItem = styled.li`
    line-height: 1.8em;
    padding-left: 0.5em;
`;
const TimeLine = styled.div`
    position: absolute;
    display: inline-block;
    left: -5.65em;
    font-size: 12px;

    @media (max-width: 767px) {
        left: -2.5em;
    }
`;
const TimePoint = styled.p`
    display: inline-block;
    width: 0.5em;
    height: 0.5em;
    border-radius: 100%;
    background-color: #2f393b;
    left: 1.2em;
    top: 0.8em;
    position: relative;

    @media (max-width: 767px) {
        display: none;
    }
`;
const YearTo = styled.span`
    background-color: #2f393b;
    color: white;
    padding: 3px 0.5em 3px 1em;
    display: inline-block;
    height: 22px;
    width: 48px;
    line-height: 17px;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: -10px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 11px 0 11px 10px;
        border-color: transparent transparent transparent #2f393b;
    }
`;
const YearFrom = styled.p`
    padding-left: 1em;
    position: relative;
    top: -10px;
`;

const Main: React.FunctionComponent<any> = ({
    summary,
    techs,
    skills,
    daily,
    education,
    work,
    projects,
    milestone,
}) => (
    <MainSection>
        <Title>SUMMARY</Title>
        <Summary>{summary}</Summary>
        <Title>SKILL</Title>
        <div>
            {skills.map((item, index) => (
                <Tag key={index}>{item}</Tag>
            ))}
        </div>
        <Title>MILESTONE</Title>
        {milestone.map((item, index) => (
            <JobSection key={index}>
                <TimeLine>
                    <YearTo>{item.to}</YearTo>
                    <TimePoint />
                    <YearFrom>{item.from}</YearFrom>
                </TimeLine>
                <Label>
                    {item.name} - {item.title}
                </Label>
                <ProjectList>
                    {item.projects.map(item => (
                        <ProjectItem key={item}>{item}</ProjectItem>
                    ))}
                </ProjectList>
            </JobSection>
        ))}
    </MainSection>
);

export default Main;
