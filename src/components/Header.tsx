/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { FC } from "react"

type Props = {
  siteTitle: string
}

const Header: FC<Props> = ({ siteTitle }) => (
  <header
    sx={{
      background: `#2f393b`,
      marginBottom: `1.45rem`,
    }}
  >
    <section
      sx={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 sx={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </section>
  </header>
)

export default Header
