'use strict'

const encode = require('./notepack/encode')
const { Uint64BE } = require('int64-buffer') // TODO: remove dependency

module.exports = {
  init () {},

  encode: (data) => {
    data = data.map(span => {
      return Object.assign({}, span, {
        start: new Uint64BE(span.start),
        duration: new Uint64BE(span.duration)
      })
    })

    return encode(data)
  },

  makePayload (data) {
    return data
  }
}
