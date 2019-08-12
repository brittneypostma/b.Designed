import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

import "../styles/post.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Post = props => {
  return (
    <Layout>
      <div className="post-page">
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <p>{props.data.markdownRemark.frontmatter.date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
        <button className="back-btn">
          <Link to="/blog">Go Back</Link>
        </button>
      </div>
    </Layout>
  )
}

export default Post
