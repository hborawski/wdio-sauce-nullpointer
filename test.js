describe('sample test', function() {
  it('should not fail', function () {
    return browser.url('https://google.com')
      .then(() => browser.$('[name="q"]'))
      .then(inputField => inputField.setValue('test'))
  })
})
