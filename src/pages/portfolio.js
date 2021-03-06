import React from "react"
import Layout from "../components/layout"

import Crwn from "../images/sites/crwn.jpg"
import SignUp from "../images/sites/sign-up-form.jpg"
import Waukazoo from "../images/sites/wo.jpg"
import Piano from "../images/sites/piano.jpg"
import DrumKit from "../images/sites/drum-kit.jpg"
import Monsters from "../images/sites/monsters.jpg"
import Quote from "../images/sites/quote.jpg"

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
              src={Crwn}
              alt="crwn-clothing"
              className="crwn portfolio-pics"
            />
          </div>
          <div className="right-top-p diamond-button">
            <img
              src={SignUp}
              alt="sign up form"
              className="sign-up portfolio-pics"
            />
          </div>
        </div>
        <div className="middle-p-container">
          <div className="left-middle-p diamond-button">
            <img
              src={Waukazoo}
              alt="Waukazoo Visitor Sign In"
              className="wo portfolio-pics"
            />
          </div>
          <div className="middle-p diamond-button">
            <img src={Piano} alt="piano" className="piano portfolio-pics" />
          </div>
          <div className="right-middle-p diamond-button">
            <img src={DrumKit} alt="Drum Kit" className="drum portfolio-pics" />
          </div>
        </div>
        <div className="bottom-p">
          <div className="left-bottom-p diamond-button">
            <img
              src={Monsters}
              alt="monsters rolodex"
              className="monsters portfolio-pics"
            />
          </div>
          <div className="right-bottom-p diamond-button">
            <img
              src={Quote}
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
