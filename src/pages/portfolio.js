import React from "react"
import Layout from "../components/layout"
import Modal from "../components/modal"
import useModal from "../components/useModal"
import "../styles/portfolio.scss"

import Crwn from "../images/sites/crwn.jpg"
import DrumKit from "../images/sites/drum-kit.jpg"
import Monsters from "../images/sites/monsters.jpg"
import Piano from "../images/sites/piano.jpg"
import Quote from "../images/sites/quote.jpg"
import SignUp from "../images/sites/sign-up-form.jpg"
import Visitor from "../images/sites/visitor.jpg"
import Waukazoo from "../images/sites/wo.jpg"

const Portfolio = () => {
  const { isShowing, toggle } = useModal()
  return (
    <Layout>
      <div className="portfolio-page">
        <h1>Some of My Work</h1>
      </div>
      <div className="portfolio">
        <div className="left-top-p diamond-button">
          <img
            src={Crwn}
            alt="crwn-clothing"
            className="crwn"
            onClick={toggle}
          />
        </div>
        <div className="right-top-p diamond-button">
          <img
            src={SignUp}
            alt="sign up form"
            className="sign-up"
            onClick={toggle}
          />
        </div>
        <div className="middle-p-container">
          <div className="left-middle-p diamond-button">
            <img
              src={Waukazoo}
              alt="Waukazoo Visitor Sign In"
              className="wo"
              onClick={toggle}
            />
          </div>
          <div className="middle-p diamond-button">
            <img
              src={Quote}
              alt="random quote generator"
              className="quote"
              onClick={toggle}
            />
          </div>
          <div className="right-middle-p diamond-button">
            <img
              src={Visitor}
              alt="Waukazoo Visitor Sign In"
              className="visitor"
              onClick={toggle}
            />
          </div>
        </div>
        <div className="left-bottom-p diamond-button">
          <img
            src={Monsters}
            alt="monsters roladex"
            className="monsters"
            onClick={toggle}
          />
        </div>
        <div className="right-bottom-p diamond-button">
          <img src={Piano} alt="piano" className="piano" onClick={toggle} />
        </div>
      </div>
      <Modal isShowing={isShowing} hide={toggle} />
    </Layout>
  )
}

export default Portfolio
