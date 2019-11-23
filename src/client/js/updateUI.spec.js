import {
  updateUIWithPositiveResponse,
  updateUIWithNegativeResponse,
  makeResultsSectionVisible,
  makeResultsSectionHidden,
  removeOfflineMessage,
  showOfflineMessage,
} from './updateUI'

describe('updateUI Tests', () => {
  beforeEach(() => {
    document.body.innerHTML = `<main>
    <section id="analyse">
        <form id="form">
            <input id="name" type="text" name="input" value="" placeholder="Name">
            <input id="submit" type="submit" name="submit" value="submit" disabled>
        </form>
    <section>
    <section id="form-results">
        <strong>Form Results:</strong>
        <div id="results"></div>
    </section>
  </main>`
  })

  test('updateUIWithPositiveResponse', async () => {
    const result = {
      polarity_confidence: 1.2,
      polarity: 'test',
      subjectivity: 'test',
      subjectivity_confidence: 'test',
    }
    updateUIWithPositiveResponse(result)

    expect(document.getElementById('results')).toMatchSnapshot()
  })
  test('updateUIWithNegativeResponse', async () => {
    const error = 'This is an error'

    updateUIWithNegativeResponse(error)

    expect(document.getElementById('results')).toMatchSnapshot()
  })

  test('makeResultsSectionVisible', async () => {
    makeResultsSectionVisible()
    const formResultsElement = document.getElementById('form-results')
    expect(formResultsElement.hasAttribute('style')).toBeFalsy()
  })

  test('makeResultsSectionHidden', async () => {
    makeResultsSectionHidden()
    const formResultsElement = document.getElementById('form-results')
    expect(formResultsElement.hasAttribute('style')).toBeTruthy()
  })

  test('removeOfflineMessage', async () => {
    const first = document.getElementById('analyse')
    const offline = "<p id='offline'>You seem to be offline!</p>"
    first.insertAdjacentHTML('afterbegin', offline)
    expect(document.getElementById('offline').innerHTML).toMatch(/offline/)
    removeOfflineMessage()
    expect(document.getElementById('offline')).toBeFalsy()
  })

  test('showOfflineMessage', async () => {
    showOfflineMessage()
    expect(document.getElementById('offline')).toMatchSnapshot()
  })
})
