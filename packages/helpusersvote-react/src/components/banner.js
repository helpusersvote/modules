import React from 'react'

import colors from '../utils/colors'
import Logo from './common/logo'

export function Banner({
  didError,
  font,
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
      <div className="huv-banner">
        <div className="huv-container">
          <div className="huv-line huv-line1">
            <Logo className="huv-logo" /> {titleText}
          </div>
          <div className="huv-line huv-line2">
            <a className="huv-link" href={ctaHref} target="_blank">
              {ctaText} &rarr;
            </a>
          </div>
        </div>
      </div>
      <style>{`
        .huv-banner {
          width: 100%;
          height: ${height}px;
          background: ${background};
          font-family: ${font};
          border-bottom: 1px solid ${borderColor};
          color: #092744;
          box-sizing: border-box;
        }
        .huv-container {
          display: flex;
          width: 80%;
          max-width: 800px;
          margin: 0 auto;
          justify-content: space-between;
        }
        .huv-line {
          display: flex;
          height: ${height}px;
          align-items: center;
          color: ${color};
        }
        .huv-logo {
          width: 16px;
          height: 16px;
          margin-right: 4px;
        }
        a.huv-link {
          color: ${ctaColor};
          text-decoration: none;
          outline: none;
        }
        a.huv-link:hover,
        a.huv-link:focus {
          opacity: 0.6;
        }
        @media (max-width: 720px) {
          .huv-container {
            width: 90%;
          }
          .huv-banner {
            font-size: 13px;
          }
        }
        @media (max-width: 460px) {
          .huv-logo {
            height: 11px;
          }
          .huv-banner {
            font-size: 12px;
          }
        }
        @media (max-width: 410px) {
          .huv-logo {
            height: 11px;
          }
          .huv-banner {
            font-size: 9px;
          }
        }
      `}</style>
    </div>
  )
}

const defaultFont = `SF UI Display, -apple-system, BlinkMacSystemFont,Segoe UI, Roboto, Helvetica, Arial, sans-serif,Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol`

Banner.defaultProps = {
  didError: false,
  titleText: 'Get ready to vote in 2018!',
  ctaHref: 'https://vote.org',
  ctaText: "Check if you're registered today",
  ctaColor: colors.blue['400'],
  height: 40,
  font: defaultFont,
  background: colors.neutral['10'],
  borderColor: colors.neutral['20'],
  color: colors.neutral['800']
}

export default Banner
