import React from 'react'

const styles = `
.huv-container {
  font-family: SF UI Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}
* {
  box-sizing: border-box;
}
/**
  * Ballot.
  */
  
.ballot {
  max-width: 800px;
  background: white;
  color: #303E50;
  overflow: hidden;
  box-shadow: rgba(67, 90, 111, 0.416) 0px 0px 1px, rgba(67, 90, 111, 0.3) 0px 2px 4px -2px;
  font-size: 16px;
  border-radius: 4px;
}

.ballot-content {
  margin: 0 16px;
  padding-bottom: 20px;
}
@media(max-width: )
.ballot-content .huv-button {

}
.ballot-contest {
  margin-top: 16px;
}

.ballot-contest-label {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  color: #69778b;
}

.ballot-contest-subtitle {
  font-weight: 600;
  max-width: 320px;
}

.ballot-link {
  padding: 0 6px;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  line-height: 28px;
  border-radius: 2px;
  background: #2F7EE7;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: background 0.2s ease-out;
}
.ballot-link:hover {
  background: #4e95f3;
}
.ballot-link:active {
  background: #1f6cd2;
}
@media(max-width: 280px) {
  .ballot-candidate-name {
    max-width: 40px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
@media(max-width: 479.5px) {
  .ballot-contest .huv-button {
    padding: 0;
    width: 32px;
    min-width: 32px;
    text-align: center;
  }
}
.ballot input[type="checkbox"] {
  width: 16px;
  height: 16px;
  vertical-align: bottom;
}
.ballot-header {
  background: white;
  border-bottom: 1px solid #e8e8e8;
  width: 800px;
  max-width: 100%;
  padding: 16px;
  z-index: 100;
}
.ballot-header.floating {
  top: 0;
  position: fixed;
  box-shadow: rgba(67, 90, 111, 0.14) 0px 1px 2px inset;
}
.ballot-header-fill {
  display: none;
  height: 172px;
}
.ballot-header-fill.visible {
  display: block;
}
@media(min-width: 528px) {
  .ballot-header-fill {
    height: 100px;
  }
  .ballot-contest-subtitle {
    max-width: 460px;
  }
}

.ballot-handoff-callout {
  padding: 16px;
  border-top: 1px solid rgba(67, 90, 111, 0.145);
  justify-content: space-between;
}
.ballot-handoff-callout:hover {
  background: rgb(249, 249, 251);
}
.ballot-handoff-callout:active {
  background: rgb(245, 246, 247);
}

/**
* Party icons.
*/

.party-icon {
  position: relative;
  top: -1px;
  margin: 0 0 0 2px;
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  background: #A7B0BD;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  vertical-align: middle;
}

.party-icon + .party-icon {
  margin-left: 3px;
}

.party-icon.blue {
  background: #2F7EE7;
}
.party-icon.dark-blue {
  background: #1b3979;
}
.party-icon.dark-red {
  background: #c10100;
}
.party-icon.blue-we {
  background: #3e8bff;
}
.party-icon.blue-wf {
  background:#004b8d;
}

.party-icon.red {
  background: #F0353E;
}

.party-icon.green {
  background: #66c700;
}

.party-icon.yellow {
  background: #fac000;
}
/**
 * Progress.
 */

.progress {
  position: relative;
  width: 100%;
  height: 36px;
  background-color: #eee;
  box-shadow: inset 0 0 0 1px #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.progress-inner {
  position: relative;
  height: 100%;
  transition: width 0.5s ease-in-out;
  background-color: #2F7EE7;
  overflow: hidden;
}

.progress-text {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  line-height: 36px;
  text-align: center;
  color: rgba(0,0,0,0.45);
  font-weight: bold;
  text-shadow: 0 0 4px rgba(255,255,255,.15);
}

.progress-text.major {
  color: #fff;
  text-shadow: 0 1px 4px rgba(0,0,0,.15);
}

.report-error {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 8px 16px;
  color: #898989;
}

.report-error:hover, .report-error:focus {
  text-decoration: underline;
}

.heading-container {
  padding: 16px;
  border-bottom: 1px solid rgba(67, 90, 111, 0.145);
}
.heading {
  margin: 0;
  font-size: 14px;
  line-height: 24px;
  color: #000;
}
`

const css = { __html: styles }

export function BallotStyles() {
  return [
    <link
      key={0}
      rel="stylesheet"
      href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
    />,
    <style key={1} dangerouslySetInnerHTML={css} />
  ]
}

export default BallotStyles
