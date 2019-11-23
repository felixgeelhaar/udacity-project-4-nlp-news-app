import {handleSubmit} from './formHandler'

global.fetch = jest.fn()

describe('formHandler Tests', () => {
  beforeEach(() => {
    document.body.innerHTML = `<main>
    <section id="analyse">
        <form id="form">
            <input id="name" type="text" name="input" value="" placeholder="Name">
            <input id="submit" type="submit" name="submit" value="submit" disabled>
        </form>
    <section>
    <section id="form-results" style="display:none">
        <strong>Form Results:</strong>
        <div id="results"></div>
    </section>
  </main>`
  })

  test('handleSubmit', async () => {
    jest.spyOn(global, 'fetch')
    await handleSubmit({preventDefault: () => {}})

    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(
      document.getElementById('form-results').hasAttribute('style'),
    ).toBeFalsy()
    expect(document.getElementById('name').value).toHaveLength(0)
  })
})
