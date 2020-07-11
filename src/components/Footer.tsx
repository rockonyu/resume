import React, { FC } from "react"
import styled from "@emotion/styled"
import { space, maxWidth, color } from "styled-system"

const Section = styled.footer`
  ${color}
  ${space}
  ${maxWidth}
`

const Container = styled.div`
  ${maxWidth}
  ${space}
`

const Footer: FC = ({ children }) => (
  <Section backgroundColor="#ececec" py={4}>
    <Container maxWidth={960} m="0 auto" p="0 1em">
      {children ? (
        children
      ) : (
        <>
          © {new Date().getFullYear()}, Written by {` `}
          <a href="/resume">Austin Chang</a> and built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </>
      )}
    </Container>
  </Section>
)

export default Footer
