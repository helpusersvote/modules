import React from 'react'

export function EarlyVotingCTA({ isElectionDay, timeLeft, onClick }) {
  if (!timeLeft || isElectionDay) {
    return (
      <a
        className="db no-underline"
        href="https://polls.vote.org/ballot/"
        target="_blank"
      >
        <div className="mt3 fw5 f6 lh-copy ba blue br2 pa2 hover-bg-washed-blue pointer">
          What&rsquo;s on your ballot?{' '}
          <span className="dib">Find out now &rarr;</span>
        </div>
      </a>
    )
  }

  return (
    <div onClick={onClick}>
      <div className="mt3 fw5 f6 lh-copy ba blue br2 pa2 hover-bg-washed-blue pointer">
        Only {timeLeft} left for you to vote early find out{' '}
        <span className="dib">where now &rarr;</span>
      </div>
    </div>
  )
}

export default EarlyVotingCTA
