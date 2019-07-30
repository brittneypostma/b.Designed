import React from "react"
import { Link } from "gatsby"

import PostLayout from "../templates/post-layout"

const NotFound = () => (
  <PostLayout>
    <h1>Page not found</h1>
    <button>
      <Link to="/">Head Home</Link>
    </button>
  </PostLayout>
)

export default NotFound
