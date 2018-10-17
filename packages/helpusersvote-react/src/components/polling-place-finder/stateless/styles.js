import React from 'react'

const styles = `
.huv-container {
  font-family: SF UI Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}
.huv-button {
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  vertical-align: middle;
  text-decoration: none;
  transition: box-shadow 80ms ease-in-out;
  -webkit-appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #016cd1;
  color: white;
  font-weight: 500;
  line-height: 32px;
  height: 32px;
  min-width: 80px;
  border-radius: 3px;
  font-size: 12px;
  box-sizing: border-box;
  background-image: -webkit-linear-gradient(to top, #0165c7, #0173df);
  background-image: -moz-linear-gradient(to top, #0165c7, #0173df);
  background-image: linear-gradient(to top, #0165c7, #0173df);
  box-shadow: inset 0 0 0 1px rgba(67,90,111,0.204), inset 0 -1px 1px 0 rgba(67,90,111,0.204);
  -webkit-transition: box-shadow 80ms ease-in-out;
  -moz-transition: box-shadow 80ms ease-in-out;
}
.huv-button:not([disabled]):not([data-disabled]):focus,
.huv-button:not([disabled]):not([data-disabled]):focus {
  z-index: 2;
  box-shadow: 0 0 0 3px rgba(1,108,209,0.301), inset 0 0 0 1px rgba(67,90,111,0.204), inset 0 -1px 1px 0 rgba(67,90,111,0.204);
}
.huv-button--blue {
  background-image: -webkit-linear-gradient(to top, #0165c7, #0173df);
  background-image: -moz-linear-gradient(to top, #0165c7, #0173df)
  background-image: linear-gradient(to top, #0165c7, #0173df);
}
.huv-button--blue:hover {
  background-image: -webkit-linear-gradient(to top, #015ebd, #016cd1);
  background-image: -moz-linear-gradient(to top, #015ebd, #016cd1);
  background-image: linear-gradient(to top, #015ebd, #016cd1);
}
.huv-button--blue:active {
  box-shadow: inset 0 0 0 1px rgba(67,90,111,0.204), inset 0 -1px 1px 0 rgba(67,90,111,0.204);
  background-image: -webkit-linear-gradient(to top, #0055b0, #004ca3);
  background-image: -moz-linear-gradient(to top, #0055b0, #004ca3);
  background-image: linear-gradient(to top, #0055b0, #004ca3);
}
.address-form {
  background: white;
  color: #303E50;
  overflow: hidden;
  box-shadow: rgba(67, 90, 111, 0.416) 0px 0px 1px, rgba(67, 90, 111, 0.3) 0px 2px 4px -2px;
  font-size: 16px;
  border-radius: 4px;
}

.address-form-content {
  padding: 16px;
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

/**
* Directions.
*/

.directions {
  position: relative;
  overflow: hidden;
  border: 1px solid #ddd;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
  font-size: 16px;
  border-radius: 4px;
}

.directions-left {
  float: left;
  width: 40%;
  padding-right: 1.5rem;
}

.directions-right {
  float: right;
  width: 60%;
}

.directions-info {
  padding: 1em;
}

.directions-label {
  margin-bottom: 8px;
  font-size: 12px;
  line-height: 19px;
  text-transform: uppercase;
  font-weight: bold;
  color: #A7B0BD;
}

.directions-address-line1 {
  font-weight: 600;
}

.directions-toolbar {
  text-align: right;
}

.directions-toolbar > * {
  display: block;
}

.directions-toolbar > *:hover {
  text-decoration: underline;
}

.directions-change-end-button {

}

.directions-change-start-button {

}

.directions-map {
  background: #eaeaea;
  min-height: 370px;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}

.directions-map.error {
  background: #fef7f7;
}

.directions-overlay {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
}
.directions-button {
  position: absolute;
  bottom: 10px;
  left: 10px;
}
.directions-small .directions-map {
  min-height: 370px;
}
@media (max-width: 30em) {
  .directions-map {
    min-height: 180px !important;
  }
}
@media (min-width: 30em) and (max-width: 818px) {
  .directions-map {
    min-height: 275px !important;
  }
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
}`

const css = { __html: styles }

export function PollingPlaceFinderStyles() {
  return [
    <link
      key={0}
      rel="stylesheet"
      href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
    />,
    <style key={1} dangerouslySetInnerHTML={css} />
  ]
}

export default PollingPlaceFinderStyles
