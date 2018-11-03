import _ from 'lodash'
import React from 'react'
import { getState } from '@helpusersvote/logic'
import POLLING_PLACE_DATA from '../data/polls.json'
import GoogleReportForm from './google-report-form'
import { ElectionDayCTA } from './election-day'

export function EarlyNotFound({
  title,
  address,
  voterInfo,
  description,
  onChangeAddress,
  onSwitchToPollingPlace
}) {
  return (
    <div className="w-100">
      <div className="outdent">
        <div className="directions directions-small mt3 mb1 flex-ns flex-row-ns">
          <div className="directions-info flex-ns flex-column-ns justify-between-ns">
            <div className="flex-auto-ns">
              <div className="directions-label">{title}</div>
              <p className="lh-copy">
                {description || (
                  <React.Fragment>
                    Not all polling places are available yet, please check again
                    in a few days or contact your{' '}
                    <a
                      className="dib link blue underline-hover pointer"
                      href="https://www.usvotefoundation.org/vote/eoddomestic.htm"
                      target="_blank"
                    >
                      local election office
                    </a>
                    .
                  </React.Fragment>
                )}
              </p>
              <ElectionDayCTA onClick={onSwitchToPollingPlace} />
            </div>
            <div className="mt3 dn db-ns">
              <div className="directions-label">
                Your Address&nbsp;&nbsp;&middot;&nbsp;&nbsp;
                <a
                  className="fw5 link blue underline-hover pointer"
                  onClick={onChangeAddress}
                >
                  Change
                </a>
              </div>
              <div className="fw6">{address.line1}</div>
              <div>
                {address.city}, {address.state} {address.zip}
              </div>
            </div>
          </div>
          <div className="directions-info dn-ns">
            <div className="mt3-ns">
              <div className="directions-label">
                Your Address&nbsp;&nbsp;&middot;&nbsp;
                <a
                  className="fw5 link blue underline-hover pointer"
                  onClick={onChangeAddress}
                >
                  Change
                </a>
              </div>
              <div>{address.line1}</div>
              <div>
                {address.city}, {address.state} {address.zip}
              </div>
            </div>
          </div>
        </div>
        <div className="cf" style={{ fontSize: 12 }}>
          <div className="fr">
            <GoogleReportForm address={address} />
          </div>
        </div>
      </div>
    </div>
  )
}

EarlyNotFound.defaultProps = {
  title: 'No open early voting locations found'
}

export default EarlyNotFound
