import React from "react"
import ReactDOM from "react-dom"

// import IMAGES_ARRAY from "../components/portfolioItems"

// const image = IMAGES_ARRAY.map(({ title, src, href, description }) => {
//   return (
//     <div>
//       <h1 className="modal-title">{title}</h1>
//       <img className="modal-img" src={src} alt="img" />
//       <p className="modal-text">{description}</p>
//       <a
//         href={href}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="modal-link"
//       >
//         <button className="modal-btn">View Site</button>
//       </a>
//     </div>
//   )
// })

const Modal = ({ isShowing, hide }) => {
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
              {image}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null
}

export default Modal
