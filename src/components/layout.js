import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import "./layout.scss"

const Layout = ({ children }) => {
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
    <div className="container-fluid ">
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="site">
        <main className="site-content">{children}</main>
      </main>
      <footer className="footer">Should be at the bottom of the page</footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout