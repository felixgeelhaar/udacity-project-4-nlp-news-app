import './styles/resets.css'
import './styles/style.sass'
import './styles/header.sass'
import './styles/form.sass'
import './styles/footer.sass'

import {handleSubmit} from './js/formHandler'
import {
  updateUIWithNegativeResponse,
  makeResultsSectionHidden,
  showOfflineMessage,
  removeOfflineMessage,
} from './js/updateUI'

const form = document.getElementById('name')
const input = document.getElementById('name')
const formButton = document.getElementById('submit')

// Set the results section initally to hidden
makeResultsSectionHidden()

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
  })
}

// Initial check if offline
if (!navigator.onLine) {
  showOfflineMessage()
}

// Event listener for being online again
window.addEventListener('online', () => {
  input.removeAttribute('disabled')
  removeOfflineMessage()
})

// Event listener for being offline
window.addEventListener('offline', () => {
  input.setAttribute('disabled', '')
  formButton.setAttribute('disabled', '')
  showOfflineMessage()
})

// Event listeners for submit or submit button click
form.addEventListener('submit', handleSubmit)
formButton.addEventListener('click', handleSubmit)

// Event listener for input field to update the UI
input.addEventListener('input', () => {
  if (!input.value) {
    formButton.setAttribute('disabled', '')
    return
  }
  formButton.removeAttribute('disabled')
})
