import React from "react"
import { Link } from "gatsby"

import "../styles/header.scss"

const Header = () => {
  const [hidden, setHidden] = React.useState(false)

  const toggleHiddenMenu = () => setHidden(!hidden)
  return (
    <div className="header">
      <div className="logo-div">
        {" "}
        <img src="b-designed192.png" alt="logo" className="logo" />
      </div>
      <div onClick={() => toggleHiddenMenu()} className="menu-wrapper">
        <h1 className="title">b.Designed</h1>
        <div className="link-wrapper">
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
          <img src="menu.png" alt="menu" className="menu" />
          <br />
          <div className="menu-text">menu</div>
        </div>
      </div>

      <a
        href="mailto:brittneypostma@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
      >
        <img src="mail.png" alt="email me" className="mail" />
        <div className="contact">Contact</div>
      </a>
    </div>
  )
}

export default Header
