require('dotenv').config()

const aylienApi = require('aylien_textapi')
const textapi = new aylienApi({
  application_id: process.env.AYLIEN_APP_ID,
  application_key: process.env.AYLIEN_API_KEY,
})

function Analyse(text = '', url = '') {
  let dataToRequest = {text}
  if (url) {
    dataToRequest = {url}
  }

  return new Promise((resolve, reject) => {
    textapi.sentiment(dataToRequest, (error, res) => {
      if (error) {
        reject(error)
      }
      resolve(res)
    })
  })
}

module.exports = Analyse
