import React, { FC } from "react"
import styled from "@emotion/styled"
import MileStone from "./MileStone"
import SkillTree from "./SkillTree"

interface Props {
  description: string
  skills: string[]
  milestone: Array<{
    to: string
    from: string
    name: string
    title: string
    projects: Array<{ name: string; href?: string }>
  }>
}

const Section = styled.div`
  background-color: white;
  margin: 2em 0;
`
const Title = styled.h3`
  border-bottom: solid 1px #2f393b;
  padding-bottom: 0.5em;
  margin-bottom: 0.5em;
  letter-spacing: 5px;
`

const Summary = styled.p`
  line-height: 2;
  white-space: pre-line;
`

const Main: FC<Props> = ({ description, skills, milestone }) => (
  <Section>
    <Title>SUMMARY</Title>
    <Summary>{description}</Summary>
    <Title>MILESTONE</Title>
    <MileStone items={milestone} />
    <Title>SKILL TREE</Title>
    <SkillTree items={skills} />
  </Section>
)

export default Main
