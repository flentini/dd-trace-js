'use strict'

const encode = require('./notepack/encode')

module.exports = {
  init () {},

  encode: (data) => {
    return encode(data)
  },

  makePayload (data) {
    return data
  }
}
