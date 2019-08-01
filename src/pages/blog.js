import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

import "../styles/blog.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          tableOfContents(pathToSlugField: "")
        }
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="blog-page">
        <h1>Blog</h1>
        <ol className="posts">
          {data.allMarkdownRemark.edges.map(edge => (
            <li className="post">
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h1>{edge.node.frontmatter.title}</h1>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage
