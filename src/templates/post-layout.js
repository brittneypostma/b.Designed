import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const PostLayout = props => {
  return (
    <div className="post-layout">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default PostLayout
