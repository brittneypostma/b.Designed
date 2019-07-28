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
        <Link to="/">
          <img src="logo-only.png" alt="logo" className="logo" />
        </Link>
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
          <img
            onMouseEnter={() => toggleHiddenMenu()}
            src="menu.png"
            alt="menu"
            className="menu"
          />
          <br />
          <div className="menu-text">menu</div>
        </div>
      </div>

      <div className="contact-wrapper">
        <a
          href="mailto:brittneypostma@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <img src="mail.png" alt="email me" className="mail" />
          <div className="contact">Contact</div>
        </a>
        <div className="social">
          <a
            href="https://www.facebook.com/BDesigned-102247847786266/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-links"
          >
            <img src="facebook.png" alt="facebook" />
          </a>
          <a
            href="https://twitter.com/BrittneyPostma"
            target="_blank"
            rel="noopener noreferrer"
            className="social-links"
          >
            <img src="twitter.png" alt="twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/brittney-postma-868928178/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-links"
          >
            <img src="in.png" alt="Linked In" />
          </a>
          <a
            href="https://github.com/sballgirl11"
            target="_blank"
            rel="noopener noreferrer"
            className="social-links"
          >
            <img src="github.png" alt="github" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
