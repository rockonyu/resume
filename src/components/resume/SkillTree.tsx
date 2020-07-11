import React, { FC } from "react"
import styled from "@emotion/styled"

interface Props {
  items: string[]
}

const Tag = styled.span`
  display: inline-block;
  background-color: #2f393b;
  color: white;
  margin: 5px;
  padding: 3px 5px;
`

const SkillTree: FC<Props> = ({ items }) => (
  <>
    {items.map((item, index) => (
      <Tag key={index}>{item}</Tag>
    ))}
  </>
)

export default SkillTree
