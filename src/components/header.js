import React from "react"
import { Link } from "gatsby"

import Social from "../components/social"

import Logo from "../images/logo-only.png"
import Menu from "../images/menu.png"
import Mail from "../images/mail.png"

import "../styles/header.scss"

const Header = () => {
  const [hidden, setHidden] = React.useState(false)

  const toggleHiddenMenu = () => setHidden(!hidden)

  return (
    <div className="header">
      <div className="logo-div">
        {" "}
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="menu-wrapper">
        <h1 className="title">b.Designed</h1>
        <img
          onMouseEnter={() => toggleHiddenMenu()}
          onClick={() => toggleHiddenMenu()}
          src={Menu}
          alt="menu"
          className="menu"
        />
        <br />
        <div className="menu-text" onClick={() => toggleHiddenMenu()}>
          menu
        </div>
        <div className="link-wrapper" onMouseLeave={() => toggleHiddenMenu()}>
          {hidden && (
            <div className="menu-content">
              {" "}
              <Link to="/" className="header-links">
                Home
              </Link>
              <Link to="/about" className="header-links">
                About
              </Link>
              <Link to="/portfolio" className="header-links">
                Portfolio
              </Link>
              <Link to="/blog" className="header-links">
                Blog
              </Link>
              <Link to="/contact" className="header-links">
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="social">
        <Social />
        <Link to="/contact" className="contact-link">
          <img className="mail" src={Mail} alt="email me" />
        </Link>
      </div>
    </div>
  )
}

export default Header
