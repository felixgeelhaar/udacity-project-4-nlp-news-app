// updates the UI in an positve response
export const updateUIWithPositiveResponse = result => {
  const {
    polarity_confidence,
    polarity,
    subjectivity,
    subjectivity_confidence,
  } = result
  const resultsElement = document.getElementById('results')
  const resultText = `<p>Polarity: <b>${polarity}</b> with confidence of ${polarity_confidence}</p>
  Subjectivity: <b>${subjectivity}</b> with confidence of ${subjectivity_confidence}</p>
  <pre>Text analysed</pre>
  <div id="text"><blockquote>${result.text}</blockquote></div>`

  makeResultsSectionVisible()
  resultsElement.innerHTML = resultText
}

// updates the UI on an error case
export const updateUIWithNegativeResponse = error => {
  const resultsElement = document.getElementById('results')
  const errorText = `<p class="error">${error}</p>`

  makeResultsSectionVisible()
  resultsElement.innerHTML = errorText
}

// shows the result section
export const makeResultsSectionVisible = () => {
  const results = document.getElementById('form-results')
  results.removeAttribute('style')
}

// hides the result section
export const makeResultsSectionHidden = () => {
  const results = document.getElementById('form-results')
  results.setAttribute('style', 'display: none')
}

// removes the message when user turn online again
export const removeOfflineMessage = () => {
  const offline = document.getElementById('offline')
  if (offline) {
    offline.remove()
  }
}

// shows an message at the top of the page that the user turned offline
export const showOfflineMessage = () => {
  const first = document.getElementById('analyse')
  if (document.getElementById('offline')) {
    return
  }
  const offline = "<p id='offline'>You seem to be offline!</p>"
  first.insertAdjacentHTML('afterbegin', offline)
}
