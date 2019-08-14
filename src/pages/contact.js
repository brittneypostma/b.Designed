import React from "react"
import Layout from "../components/layout"

import "../styles/contact.scss"

const ContactPage = () => (
  <Layout>
    <div className="contact-card">
      <h1>Let's get in touch!</h1>

      <form
        data-netlify="true"
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        action="/pages/success"
        name="contact"
        method="POST"
        className="card-form"
      >
        <div>
          <label>
            First Name:
            <input
              name="contactFirstName"
              id="contactFirstName"
              type="text"
              placeholder="Your first name"
            />
          </label>
        </div>

        <div>
          <label>
            {" "}
            Last Name:
            <input
              name="contactLastName"
              id="contactLastName"
              type="text"
              placeholder="Your last name"
            />
          </label>
        </div>

        <div>
          <label>
            Email Address:
            <input
              name="contactEmail"
              id="contactEmail"
              type="email"
              placeholder="Your-email-name@domain.com"
            />
          </label>
        </div>

        <div>
          <label>
            Subject:
            <input
              name="contactSubject"
              id="contactSubject"
              type="text"
              placeholder="Your subject"
            />
          </label>
        </div>
        <label>
          Message: <br />
          <textarea
            name="contactMessage"
            id="contactMessage"
            placeholder="Your message"
          />
        </label>

        <button className="btn-form" type="submit" value="Send message">
          Submit
        </button>
      </form>
    </div>
  </Layout>
)

export default ContactPage
