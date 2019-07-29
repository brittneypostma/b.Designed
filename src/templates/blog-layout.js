import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

const BlogLayout = props => {
  return (
    <div className="blog-layout">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default BlogLayout
