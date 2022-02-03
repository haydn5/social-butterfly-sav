import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"


import logo from "../images/social-butterfly-sav-cropped.svg"

const Header = ({ siteTitle }) => (
  <header className="logoColor p-4 text-center pe-5">
    <Link to="/">
      <img src={logo} alt="{siteTitle}" width="300" />
    </Link>
          
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
