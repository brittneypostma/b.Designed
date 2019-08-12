import React from "react"

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
        <img className="social-img" src="twitter.svg" alt="twitter" />
      </a>
      <a
        href="https://www.linkedin.com/in/brittney-postma-868928178/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-links"
      >
        <img className="social-img" src="in.png" alt="Linked In" />
      </a>
      <a
        href="https://github.com/sballgirl11"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="social-img gh" src="github.svg" alt="github" />
      </a>
      <a
        href="https://www.facebook.com/BDesigned-102247847786266/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-links"
      >
        <img className="social-img" src="facebook.png" alt="facebook" />
      </a>
    </div>
  )
}

export default Social
