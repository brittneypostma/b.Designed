import React from "react"
import { Link } from "gatsby"

import "../styles/header.scss"

const Header = () => (
  <div className="header">
    <h1 className="title">b.Designed</h1>
    <div className="links-container">
      <Link to="/" className="header-links">
        Home
      </Link>
      <Link to="/blog" className="header-links">
        Blog
      </Link>
      <Link to="/about" className="header-links">
        About
      </Link>
      <Link to="/contact" className="header-links">
        Contact
      </Link>
    </div>
  </div>
)

export default Header
