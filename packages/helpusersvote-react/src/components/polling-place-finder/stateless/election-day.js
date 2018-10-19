import React from 'react'

const LEARN_MORE_HREF = 'https://www.usvotefoundation.org/vote/eoddomestic.htm'

export function ElectionDayNotice({ isElectionDay }) {
  return isElectionDay ? (
    <div className="mt2 mt3-ns red">
      If you are in line before closing time, you <em>must</em> be allowed to
      vote.
      <strong className="db mv3">Head over soon!</strong>
      <a href={LEARN_MORE_HREF} className="link blue underline-hover">
        Learn about your rights
      </a>
    </div>
  ) : null
}

export default {
  ElectionDayNotice
}
