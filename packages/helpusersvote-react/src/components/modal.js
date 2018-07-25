import React from 'react'

import colors from '../utils/colors'

function LogoAddition({ logoUrl, logoAlt, logoHref }) {
  return (
    <div className="overlay-logos">
      {logoUrl && (
        <React.Fragment>
          <a href={logoHref || '#'}>
            <img className="overlay-logo" src={logoUrl} alt={logoAlt} />
          </a>
          <strong className="overlay-add">+</strong>
        </React.Fragment>
      )}
      <img
        className="overlay-logo"
        src="https://helpusersvote.com/static/logo.png"
      />
    </div>
  )
}

function ModalText() {
  return (
    <div className="overlay-text">
      <p>
        It's that time of year again, for U.S. citizens, to check if you're
        ready to vote in the upcoming election!
      </p>
    </div>
  )
}

function ModalCTAs() {
  return (
    <div>
      <a className="overlay-btn" href="https://www.vote.org/" target="_blank">
        Check your registration &rarr;
      </a>
      <a
        className="overlay-btn"
        href="https://www.vote.org/polling-place-locator/"
        target="_blank"
      >
        Find your polling place &rarr;
      </a>
      <a className="overlay-btn outline" href="#" target="_blank">
        Skip or Not interested
      </a>
    </div>
  )
}

function Modal({ ctaColor, ctaText, ctaHref, logoProps }) {
  return (
    <div>
      <div className="overlay-shadow" />
      <div className="overlay">
        <div className="overlay-content">
          <LogoAddition {...logoProps} />
          <div style={{ flex: 1 }}>
            <ModalText />
          </div>
          <ModalCTAs />
        </div>
      </div>
      <style>{`
        .overlay-shadow {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          background: rgba(0,0,0,.3);
        }
        .overlay {
          position: fixed;
          top: 50%;
          left: 50%;
          width: 80%;
          max-width: 400px;
          background: white;
          border-radius: 4px;
          box-shadow: 0 1px 12px rgba(50, 100, 50, 0.125);
          transform: translateX(-50%) translateY(-50%);
        }
        .overlay-content {
          display: flex;
          position: relative;
          padding: 40px 20px 20px;
          flex-direction: column;
          justify-content: space-between;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, sans-serif;
        }
        .overlay-logos {
          text-align: center;
        }
        .overlay-logo {
          width: 80px;
          height: 80px;
          border-radius: 4px;
        }
        .overlay-add {
          display: inline-block;
          vertical-align: top;
          line-height: 80px;
          width: 60px;
          font-size: 30px;
          color: rgba(75, 83, 101, 0.7);
          text-align: center;
        }
        .overlay-text {
          padding: 20px 8px;
          font-size: 18px;
          line-height: 22px;
          text-align: center;
        }
        .overlay-text p {
          margin: 0;
        }
        .overlay-btn {
          display: block;
          margin-bottom: 16px;
          padding: 12px;
          width: 100%;
          background: ${ctaColor};
          color: white;
          text-align: center;
          text-decoration: none;
          border-radius: 4px;
          box-sizing: border-box;
        }
        .overlay-btn.outline {
          color: ${ctaColor};
          border: 2px solid;
          background: none;
        }
        .overlay-btn:hover {
          transform: translateY(-2px);
        }
        .overlay-btn:active {
          transform: translateY(1px) scale(0.95);
        }
        .overlay-btn:last-child {
          margin-bottom: 0;
        }
        @media (max-width: 767px) {
          .overlay-text {
            padding: 20px 0px;
            font-size: 18px;
          }
        }
        @media (max-width: 400px) {
          .overlay-text {
            padding: 20px 0px;
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  )
}

Modal.defaultProps = {
  ctaColor: colors.blue['400'],
  logoProps: {}
}

export default Modal
