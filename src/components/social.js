import React from "react"

import Twitter from "../images/twitter.svg"
import LinkedIn from "../images/in.png"
import Github from "../images/github.svg"
import Facebook from "../images/facebook.png"

import "../styles/social.scss"

const Social = () => {
  return (
    <div>
      <a
        href="https://twitter.com/BrittneyPostma"
        target="_blank"
        rel="noopener noreferrer"
        className="social-links"
      >
        <img className="social-img" src={Twitter} alt="twitter" />
      </a>
      <a
        href="https://www.linkedin.com/in/brittney-postma-868928178/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-links"
      >
        <img className="social-img" src={LinkedIn} alt="Linked In" />
      </a>
      <a
        href="https://github.com/sballgirl11"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="social-img gh" src={Github} alt="github" />
      </a>
      <a
        href="https://www.facebook.com/BDesigned-102247847786266/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-links"
      >
        <img className="social-img" src={Facebook} alt="facebook" />
      </a>
    </div>
  )
}

export default Social
