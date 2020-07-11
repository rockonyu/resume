import { Link } from "gatsby"
import React, { FC } from "react"

type Props = {
  siteTitle: string
}

const Header: FC<Props> = ({ siteTitle }) => (
  <header
    style={{
      background: `#2f393b`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
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
    </div>
  </header>
)

export default Header
