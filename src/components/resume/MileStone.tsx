import React, { FC } from "react"
import styled from "@emotion/styled"

interface Props {
  items: Array<{
    to: string
    from: string
    name: string
    title: string
    projects: Array<{ name: string; href?: string }>
    highlights?: string[]
  }>
}

const Content = styled.div`
  margin: 1em 0;
`
const Works = styled.div`
  margin: 0;
  margin-bottom: 2em;
  @media (max-width: 767px) {
    margin: 0;
    border: none;
    padding: 0;
    padding-bottom: 1em;
  }
`
const WorkTitle = styled.h3`
  line-height: 1.5;
  margin: 0.5em 0;
  letter-spacing: 1.5px;
`
const Highlights = styled.ul`
  padding-left: 1em;
  margin: 0;
  line-height: 2;
`
const Item = styled.li`
  margin: 0;
`
const Projects = styled.ul`
  margin: 0;
  margin-top: 0.5em;
  display: inline-block;
  list-style: none;
  padding-left: 0;
  & > li {
    display: inline-block;
  }
`
const TimeLine = styled.div`
  float: right;
  font-size: 0.8em;
  margin-left: 10px;
`
const From = styled.span`
  margin-right: 2em;
  @media (max-width: 767px) {
    display: none;
  }
`
const To = styled.span`
  background-color: #2f393b;
  color: white;
  padding: 2px 1em;
  display: inline-block;
  line-height: 16px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: -10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 10px 0;
    border-color: transparent #2f393b transparent transparent;
  }
`
const Link = styled.a`
  text-decoration: none;
  color: white;
  background-color: #2f393b;
  margin: 5px;
  padding: 3px 5px;
  display: inline-block;
  position: relative;
  top: 0;
  left: 0;
  transition: top 0.2s, left 0.2s;
  &:hover {
    top: -2px;
    left: -2px;
  }
`

const MileStone: FC<Props> = ({ items }) => (
  <Content>
    {items.map((milestone, index) => (
      <Works key={index}>
        <TimeLine>
          <From>{milestone.from}</From>
          <To>{milestone.to}</To>
        </TimeLine>
        <WorkTitle>
          {milestone.name} - {milestone.title}
        </WorkTitle>
        <Highlights>
          {milestone.highlights?.map((item, $index) => (
            <Item key={$index}>{item}</Item>
          ))}
        </Highlights>
        {milestone.projects.length > 0 ? (
          <Projects>
            {milestone.projects.map(proj =>
              proj.href ? (
                <Item key={proj.name}>
                  <Link
                    key={proj.name}
                    href={proj.href}
                    target="_blank"
                    rel="noopener"
                  >
                    {proj.name}
                  </Link>
                </Item>
              ) : (
                <Item key={proj.name}>{proj.name}</Item>
              )
            )}
          </Projects>
        ) : null}
      </Works>
    ))}
  </Content>
)

export default MileStone
