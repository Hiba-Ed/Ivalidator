'use strict'

class Test {
  get rules () {
    return {
      username: 'required|min:3',
      email: "required|email"
    }
  }
  get messages() { 
    return {
    'username.required': 'username is required',
    'username.min': 'username must be at least 3 characters long',
    'email.required': 'email is required',
    'email.email': 'email address must be in a valid email format'
    }
  }
  async fails(errorMessages) { 
    this.ctx.session.withErrors(errorMessages[0]).flashAll();
    return this.ctx.response.redirect('back');
  }
}

module.exports = Test
