import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Navbar = ({ siteTitle }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand nav-item text-uppercase" href="#">{siteTitle}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar"
                aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item text-uppercase">
              <ExactNavLink
                to="/"
              >
                Home
              </ExactNavLink>
            </li>
            <li className="nav-item text-uppercase">
              <ExactNavLink
                to="/about"
              >
                About
              </ExactNavLink>
            </li><li className="nav-item text-uppercase">
              <ExactNavLink
                to="/portfolio"
              >
                Portfolio
              </ExactNavLink>
            </li><li className="nav-item text-uppercase">
              <ExactNavLink
                to="/contact"
              >
                Contact
              </ExactNavLink>
            </li>
            <li className="nav-item text-uppercase">
              <ExactNavLink
                to="/contact"
              >
                {""}
              </ExactNavLink>
            </li>
            <li className="nav-item text-uppercase">
              <ExactNavLink
                to="/contact"
              >
                Contact
              </ExactNavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
