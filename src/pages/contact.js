import React from "react"
import Layout from "../components/layout"

import "../styles/contact.scss"

const ContactPage = () => (
  <Layout>
    <div className="contact-card">
      <h1>Let's get in touch!</h1>

      <form formAction="" className="card-form">
        <div>
          <input
            name="contactFirstName"
            id="contactFirstName"
            type="text"
            placeholder="Your first name"
          />
        </div>

        <div>
          <input
            name="contactLastName"
            id="contactLastName"
            type="text"
            placeholder="Your last name"
          />
        </div>

        <div>
          <input
            name="contactEmail"
            id="contactEmail"
            type="email"
            placeholder="Your email address"
          />
        </div>

        <div>
          <input
            name="contactSubject"
            id="contactSubject"
            type="text"
            placeholder="Subject"
          />
        </div>

        <textarea
          name="contactMessage"
          id="contactMessage"
          placeholder="Your message"
        />

        <button className="btn-form" type="submit" value="Send message">
          Submit
        </button>
      </form>
      <div className="social-form">
        <a
          href="https://www.facebook.com/BDesigned-102247847786266/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="facebook.png"
            alt="facebook"
            className="social-links-form"
          />
        </a>
        <a
          href="https://twitter.com/BrittneyPostma"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="twitter.png" alt="twitter" className="social-links-form" />
        </a>
        <a
          href="https://www.linkedin.com/in/brittney-postma-868928178/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="in.png" alt="Linked In" className="social-links-form" />
        </a>
        <a
          href="https://github.com/sballgirl11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="github.png" alt="github" className="social-links-form" />
        </a>
      </div>
    </div>
  </Layout>
)

export default ContactPage
