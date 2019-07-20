import * as React from 'react';
import styled from 'styled-components';

const HeaderSection = styled.div`
    text-align: center;
    background-color: #2f393b;
    color: white;
    padding: 2em;
    height: 280px;
`;
const Career = styled.p`
    font-size: 120%;
    font-weight: 900;
    padding: 1em;
    margin: 0;
`;
const MyName = styled.h1`
    font-size: 3em;
    letter-spacing: 1em;
    padding: 0 4em 1em 5em;
    margin: 0;
    display: inline-block;
    border-bottom: solid 1px white;

    @media (max-width: 767px) {
        padding: 0px 0.5em 1em 1.5em;
    }
`;
const TitleSection = styled.h3`
    margin: 0.5em;
`;
const Title = styled.span`
    padding: 0.5em;
    padding-left: 1.5em;
    border: solid 1px white;
    letter-spacing: 1em;
    top: -1.2em;
    background-color: #2f393b;
    position: relative;

    @media (max-width: 767px) {
        letter-spacing: 0.5em;
    }
`;

const Header: React.FunctionComponent<any> = ({ name, label }) => (
    <HeaderSection>
        <Career>WEB DEVELOPER</Career>
        <MyName>{name}</MyName>
        <TitleSection>
            <Title>{label}</Title>
        </TitleSection>
    </HeaderSection>
);

export default Header;
