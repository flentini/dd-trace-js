'use strict'

const msgpack = require('msgpack-lite')
const { Int64BE } = require('int64-buffer') // TODO: remove dependency

let codec

module.exports = {
  init () {},

  encode: (buffer, offset, data, writer) => {
    codec = codec || msgpack.createCodec({ int64: true })

    data = data.map(span => {
      return Object.assign({}, span, {
        start: new Int64BE(span.start),
        duration: new Int64BE(span.duration)
      })
    })

    const encoded = msgpack.encode(data, { codec })

    encoded.copy(buffer, offset)

    return offset + encoded.length
  },

  makePayload (data) {
    return data
  }
}
