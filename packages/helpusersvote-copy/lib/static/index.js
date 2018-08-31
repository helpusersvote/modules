const links = {
  registration: {
    default: 'https://vote.org'
  }
}

const text = {
  registration: {
    title: 'Get ready to vote in 2018!',
    cta: `Check if you're registered today`
  }
}

const html = {}

html.registration = ({ text, links }) => `<div className="huv--container">
  <span>${text.title}</span>
  <a href="${links.cta}">${text.cta}</a>
</div>`

module.exports = {
  text,
  html
}
