/** @jsx jsx */
import { jsx } from "theme-ui"
import { FC, Fragment } from "react"

const Footer: FC = ({ children }) => (
  <footer
    sx={{
      backgroundColor: "#ececec",
      py: 4,
    }}
  >
    <section
      sx={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "0 1em",
      }}
    >
      {children ? (
        children
      ) : (
        <Fragment>
          © {new Date().getFullYear()}, Written by {` `}
          <a href="/resume">Austin Chang</a> and built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Fragment>
      )}
    </section>
  </footer>
)

export default Footer
