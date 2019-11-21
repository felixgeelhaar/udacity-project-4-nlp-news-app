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
  <h2>Text analysed</h2>
  <div id="text"><blockquote>${result.text}</blockquote></div>`

  resultsElement.innerHTML = resultText
}

export const updateUIWithNegativeResponse = error => {
  const resultsElement = document.getElementById('results')
  const errorText = `<p class="error">${error}</p>`

  resultsElement.innerHTML = errorText
}
