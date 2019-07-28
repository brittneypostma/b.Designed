import React from "react"

import Header from "./header"
import Footer from "./footer"

import "../styles/layout.scss"

const Layout = props => (
  <div className="layout">
    <Header />
    <hr className="top-hr" />
    {props.children}
    <Footer />
  </div>
)

export default Layout
