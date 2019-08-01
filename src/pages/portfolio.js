import React from "react"
import Layout from "../components/layout"

import "../styles/portfolio.scss"

const Portfolio = () => {
  return (
    <Layout>
      <div className="portfolio-page">
        <h1>Some of My Work</h1>
      </div>
      <div className="portfolio">
        <div className="top-p">
          <div className="left-top-p diamond-button">
            <img
              src="crwn.jpg"
              alt="crwn-clothing"
              className="crwn portfolio-pics"
            />
          </div>
          <div className="right-top-p diamond-button">
            <img
              src="sign-up-form.jpg"
              alt="sign up form"
              className="sign-up portfolio-pics"
            />
          </div>
        </div>
        <div className="middle-p-container">
          <div className="left-middle-p diamond-button">
            <img
              src="wo.jpg"
              alt="Waukazoo Visitor Sign In"
              className="wo portfolio-pics"
            />
          </div>
          <div className="middle-p diamond-button">
            <img src="piano.jpg" alt="piano" className="piano portfolio-pics" />
          </div>
          <div className="right-middle-p diamond-button">
            <img
              src="drum-kit.jpg"
              alt="Drum Kit"
              className="drum portfolio-pics"
            />
          </div>
        </div>
        <div className="bottom-p">
          <div className="left-bottom-p diamond-button">
            <img
              src="monsters.jpg"
              alt="monsters roladex"
              className="monsters portfolio-pics"
            />
          </div>
          <div className="right-bottom-p diamond-button">
            <img
              src="quote.jpg"
              alt="random quote generator"
              className="quote portfolio-pics"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio
