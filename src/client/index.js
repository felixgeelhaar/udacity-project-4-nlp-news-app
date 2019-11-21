import './styles/resets.css'
import './styles/style.sass'
import './styles/header.sass'
import './styles/form.sass'
import './styles/footer.sass'

import {handleSubmit} from './js/formHandler'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration)
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}

const form = document.getElementById('name')
const formButton = document.getElementById('submit')

form.addEventListener('submit', handleSubmit)
formButton.addEventListener('click', handleSubmit)
