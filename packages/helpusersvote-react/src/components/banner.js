import React from 'react'

import colors from '../utils/colors'
import Logo from './common/logo'

export function Banner({
  didError,
  color,
  titleText,
  ctaHref,
  ctaText,
  ctaColor,
  background,
  borderColor,
  height
}) {
  if (didError) {
    return <div />
  }

  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="line">
            <Logo className="logo" /> {titleText}
          </div>
          <div className="line">
            <a href={ctaHref} target="_blank">
              {ctaText} &rarr;
            </a>
          </div>
        </div>
      </div>
      <style>{`
        body, html {
          margin: 0;
          font-family: SF UI Display, -apple-system, BlinkMacSystemFont,
            Segoe UI, Roboto, Helvetica, Arial, sans-serif,
            Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
        }
        .banner {
          width: 100%;
          height: ${height}px;
          background: ${background};
          border-bottom: 1px solid ${borderColor};
          color: #092744;
          box-sizing: border-box;
        }
        .container {
          display: flex;
          width: 80%;
          max-width: 800px;
          margin: 0 auto;
          justify-content: space-between;
        }
        .line {
          display: flex;
          height: ${height}px;
          align-items: center;
          color: ${color};
        }
        .logo {
          width: 16px;
          height: 16px;
          margin-right: 4px;
        }
        a {
          color: ${ctaColor};
          text-decoration: none;
          outline: none;
        }
        a:hover,
        a:focus {
          opacity: 0.6;
        }
        @media (max-width: 720px) {
          .container {
            width: 90%;
          }
          .banner {
            font-size: 13px;
          }
        }
        @media (max-width: 460px) {
          .logo {
            height: 11px;
          }
          .banner {
            font-size: 12px;
          }
        }
        @media (max-width: 410px) {
          .logo {
            height: 11px;
          }
          .banner {
            font-size: 9px;
          }
        }
      `}</style>
    </div>
  )
}

Banner.defaultProps = {
  didError: false,
  titleText: 'Get ready to vote in 2018!',
  ctaHref: 'https://vote.org',
  ctaText: "Check if you're registered today",
  ctaColor: colors.blue['400'],
  height: 40,
  background: colors.neutral['10'],
  borderColor: colors.neutral['20'],
  color: colors.neutral['800']
}

export default Banner
