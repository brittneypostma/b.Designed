import React from "react"

import Layout from "../components/layout"

import Family from "../../static/family.png"
import WebDev from "../../static/webdev.png"
import Graphic from "../../static/graphic.png"
import Marketing from "../../static/marketing.png"
import Fast from "../../static/fast.png"
import Responsive from "../../static/responsive.png"
import Intuitive from "../../static/intuitive.png"
import Dynamic from "../../static/dynamic.png"

import "../styles/about.scss"

const AboutPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <div className="left-about">
          <img src={Family} alt="family" className="family" />
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
              <img src={WebDev} alt="web dev" className="skills dev" />
              <p>
                Web <br />
                Developer
              </p>
            </div>
            <div>
              <img
                src={Graphic}
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
                src={Marketing}
                alt="marketer"
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
            <img src={Fast} alt="fast" className="icons fast card-front" />
          </div>
          <div>
            <p>RESPONSIVE</p>
            <img
              src={Responsive}
              alt="responsive"
              className="icons responsive card-front"
            />
          </div>
          <div>
            <p>INTUITIVE</p>
            <img
              src={Intuitive}
              alt="intuitive"
              className="icons intuitive card-front"
            />
          </div>
          <div>
            <p>DYNAMIC</p>
            <img
              src={Dynamic}
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
