/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header, Footer } from "./"
import styled from "@emotion/styled"
import { space, maxWidth, minHeight } from "styled-system"
import { Global, css } from "@emotion/core"

type Props = {
  title?: string
  footer?: JSX.Element
}

const Container = styled.section`
  ${space}
  ${maxWidth}
  ${minHeight}
`

const Layout: FC<Props> = ({ title, children, footer }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global styles={css``} />
      <Header siteTitle={title || data.site.siteMetadata.title} />
      <Container m="0 auto" maxWidth={960} minHeight="80vh" p="0 1rem 1.5rem">
        <main>{children}</main>
      </Container>
      <Footer>{footer}</Footer>
    </>
  )
}

export default Layout
