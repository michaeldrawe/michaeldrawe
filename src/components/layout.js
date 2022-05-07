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
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} class="display-1"/>
      <main className="site">
        <main className="site-content">{children}</main>
      </main>
      <footer className="footer" >Copyright 2022 Michael Drawe</footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
