import React from "react"

import Layout from "../components/layout"

import "../styles/about.scss"

const AboutPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <img src="family.png" alt="family" className="family" />
        <div className="middle-about">
          {" "}
          <h1>Me Talking About Myself</h1>
          <p>
            I am a mom of 3 wonderful children and I have still managed to find
            the time to teach myself to code. I love developing web sites
            beautiful, fluid, and responsive. I thrive on mobile-first
            development with an extensive knowledge of CSS and React with
            Gatsby, SEO, UX/UI design, and logo design. I love learning about
            all the cool new stuff that comes out in the tech world daily. I
            also love coffee and beer, because yeah...
          </p>
        </div>
        <div className="right-about">
          <img src="fast.png" alt="fast" className="icons" />
          <img src="responsive.png" alt="responsive" className="icons" />
          <img src="intuitive.png" alt="intuitive" className="icons" />
        </div>
        <div className="bottom-about">
          <img src="fast.png" alt="fast" className="icons" />
          <img src="responsive.png" alt="responsive" className="icons" />
          <img src="intuitive.png" alt="intuitive" className="icons" />
          <img src="dynamic.png" alt="dynamic" className="icons" />
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
