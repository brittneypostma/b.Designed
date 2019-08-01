import React from "react"
import ReactDOM from "react-dom"

const imagesArray = [
  {
    id: 0,
    title: "Crwn Clothing",
    src: require(`../images/sites/crwn.jpg`),
    description:
      "A mock store app built using React, Redux with Google Authentication and hosted on Heroku.",
    href: "https://crwn-clothing-react.herokuapp.com",
  },
  {
    title: "Crwn g",
    src: require(`../images/sites/crwn.jpg`),
    description:
      "A mock store app built using React, Redux with Google Authentication and hosted on Heroku.",
    href: "crwn-clothing-react.herokuapp.com",
  },
]

const title = imagesArray.title
const src = imagesArray.src
const description = imagesArray.description
const href = imagesArray.href

const Modal = ({ isShowing, hide, title, src, description, href }) => {
  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {imagesArray.map(({ title, src, description, href }) => {
                return (
                  <div>
                    <h1 className="modal-title">{title}</h1>
                    <img className="modal-img" src={src} alt="img" />
                    <p className="modal-text">{description}</p>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-link"
                    >
                      <button className="modal-btn">View Site</button>
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null
}

export default Modal
