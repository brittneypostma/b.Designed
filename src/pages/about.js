import React from "react"

import Layout from "../components/layout"

import "../styles/about.scss"

const AboutPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="left-about">
          <img src="family.png" alt="family" className="family" />
        </div>
        <div className="middle-about">
          {" "}
          <h1>About Me</h1>
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
          <h1>Skills</h1>
          <div className="skill-div">
            <div>
              <img src="webdev.png" alt="web dev" className="skills dev" />
              <p>
                Web <br />
                Developer
              </p>
            </div>
            <div>
              <img
                src="graphic.png"
                alt="graphic designer"
                className="skills graphic"
              />
              <p>
                Graphic
                <br /> Designer
              </p>
            </div>
            <div>
              <img
                src="marketing.png"
                alt="markerter"
                className="skills marketing"
              />
              <p>
                Digital
                <br />
                Marketer
              </p>
            </div>
          </div>
        </div>

        <div className="bottom-about">
          <div>
            <p>FAST</p>
            <img src="fast.png" alt="fast" className="icons fast card-front" />
          </div>
          <div>
            <p>RESPONSIVE</p>
            <img
              src="responsive.png"
              alt="responsive"
              className="icons responsive card-front"
            />
          </div>
          <div>
            <p>INTUITIVE</p>
            <img
              src="intuitive.png"
              alt="intuitive"
              className="icons intuitive card-front"
            />
          </div>
          <div>
            <p>DYNAMIC</p>
            <img
              src="dynamic.png"
              alt="dynamic"
              className="icons dynamic card-front"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
