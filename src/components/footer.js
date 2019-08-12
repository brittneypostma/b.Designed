import React from "react"

import Social from "./social"

import "../styles/footer.scss"

const Footer = () => (
  <div className="footer">
    <div className="mobile-social">
      <Social />
    </div>
    <p>
      Created by{" "}
      <a
        href="https://twitter.com/BrittneyPostma"
        alt="twitter page"
        target="_blank"
        rel="noopener noreferrer"
        className="name"
      >
        b.Designed
      </a>
      , &copy; {new Date().getFullYear()}
    </p>
  </div>
)

export default Footer
