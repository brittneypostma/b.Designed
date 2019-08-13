import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import Me from "../../static/circle-photo.png"

import "../styles/index.scss"

const changingTextArray = [
  "Mom",
  "Developer",
  "Designer",
  "Marketer",
  "Freelancer",
]

class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = { textIdx: 0 }
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let curIdx = this.state.textIdx
      this.setState({ textIdx: curIdx + 1 })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timeout)
  }

  render() {
    let changingText =
      changingTextArray[this.state.textIdx % changingTextArray.length]
    return (
      <Layout>
        <div className="home">
          <div className="right-home">
            <img src={Me} alt="me" className="photo" />
          </div>
          <div className="left-home">
            <h1 className="hello">Hello,</h1>
            <h2>
              I am a <span className="changing-text">{changingText}</span>
            </h2>
            <div className="home-btns">
              <Link to="/contact">
                <button className="contact-btn home-btn">Contact me now</button>
              </Link>
              <Link to="/portfolio">
                <button className="portfolio-btn home-btn">See my work</button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
