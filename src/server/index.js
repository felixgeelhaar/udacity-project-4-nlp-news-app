var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')

const Analyse = require('./nlp')

// Initialize the app
const app = express()

// Configure and use middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)
app.use(bodyParser.json())
app.use(cors())

// Serve static files from dist directory
app.use(express.static('dist'))

// Serve index file on root request
app.get('/', function(req, res) {
  res.sendFile('index.html', {root: 'dist'})
})

app.post('/api/analyse', async (req, res) => {
  const {text, url} = req.body
  try {
    const result = await Analyse(text, url)
    res.status(200).send(result)
  } catch (e) {
    res.status(404).send(e)
  }
})

// Debug endpoint for testing purposes
app.get('/test', function(req, res) {
  res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function() {
  console.log('NLP News App listening on port 3000!')
})
