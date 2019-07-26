import React from "react"
import Layout from "../components/layout"

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
        <h1>Hello,</h1>
        <h2>
          I am a <span className="changing-text">{changingText}</span>
        </h2>
      </Layout>
    )
  }
}

export default IndexPage
