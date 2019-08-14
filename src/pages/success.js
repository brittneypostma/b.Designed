import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"

const Thanks = () => {
  return (
    <Layout>
      <div>Thank you for subscribing!</div>
      <button>
        <Link to="/">Head Home</Link>
      </button>
    </Layout>
  )
}

export default Thanks
