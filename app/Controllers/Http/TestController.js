'use strict'

class TestController {
  getForm({ view }) {
    return view.render('form')
  }
  postForm() {
    return 'Form submitted!'
  } 
}

module.exports = TestController