import React from "react"
import PostHeader from "./post-header"
import Footer from "../components/footer"

const PostLayout = props => {
  return (
    <div className="post-layout">
      <PostHeader />
      {props.children}
      <Footer />
    </div>
  )
}

export default PostLayout
