'use strict'

const encode = require('./notepack/encode')

let codec

module.exports = {
  init () {},

  encode: (data) => {
    return encode(data, { codec })
  },

  makePayload (data) {
    return data
  }
}
