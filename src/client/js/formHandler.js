import {
  updateUIWithPositiveResponse,
  updateUIWithNegativeResponse,
  showLoadingIndicator,
} from './updateUI'

export const handleSubmit = async event => {
  event.preventDefault()
  showLoadingIndicator()
  const formText = document.getElementById('name')
  let body = JSON.stringify({text: formText.value})

  // Check if input is an url, then set different body parmameter
  if (/https?:\/\/.+\.[a-z]{2,3}/g.test(formText.value)) {
    body = JSON.stringify({url: formText.value})
  }

  try {
    const result = await fetch('http://localhost:3000/api/analyse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
    const analyse = await result.json()

    // Clear form text input value
    formText.value = ''
    formText.dispatchEvent(new Event('input'))

    // Update UI with response from Aylien API
    updateUIWithPositiveResponse(analyse)
  } catch (e) {
    // Update UI with error
    updateUIWithNegativeResponse(e)
  }
}
