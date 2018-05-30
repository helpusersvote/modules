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

html.registration = `<div className="huv--container">
  <span>${text.registration.title}</span>
  <a href="${links.registration.default}">${text.registration.title}</a>
</div>`

module.exports = {
  text,
  html
}
