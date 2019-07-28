import React from "react"

import Header from "./header"
import Footer from "./footer"

const Layout = props => (
  <div className="layout">
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout
