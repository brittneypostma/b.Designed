import React from "react"
import { Link } from "gatsby"

import Logo from "../images/logo-only.png"
import Menu from "../images/menu.png"
import Facebook from "../images/facebook.png"
import Twitter from "../images/twitter.png"
import In from "../images/in.png"
import Github from "../images/github.png"
import Mail from "../images/mail.png"

import "../styles/header.scss"

const BlogHeader = () => {
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

      <div className="contact-wrapper">
        <a
          href="mailto:brittneypostma@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <img src={Mail} alt="email me" className="mail" />
          <div className="contact">Contact</div>
        </a>
        <div className="social">
          <a
            href="https://www.facebook.com/BDesigned-102247847786266/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-links"
          >
            <img src={Facebook} alt="facebook" />
          </a>
          <a
            href="https://twitter.com/BrittneyPostma"
            target="_blank"
            rel="noopener noreferrer"
            className="social-links"
          >
            <img src={Twitter} alt="twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/brittney-postma-868928178/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-links"
          >
            <img src={In} alt="Linked In" />
          </a>
          <a
            href="https://github.com/sballgirl11"
            target="_blank"
            rel="noopener noreferrer"
            className="social-links"
          >
            <img src={Github} alt="github" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogHeader
