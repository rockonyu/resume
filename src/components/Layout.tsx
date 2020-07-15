/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

/** @jsx jsx */
import { jsx } from "theme-ui"
import { FC, Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header, Footer } from "./"
import { Global, css } from "@emotion/core"

type Props = {
  title?: string
  footer?: JSX.Element
}

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
    <Fragment>
      <Global styles={css``} />
      <Header siteTitle={title || data.site.siteMetadata.title} />
      <main
        sx={{
          margin: "0 auto",
          maxWidth: 960,
          minHeight: "80vh",
          padding: "0 1rem 1.5rem",
        }}
      >
        {children}
      </main>
      <Footer>{footer}</Footer>
    </Fragment>
  )
}

export default Layout
