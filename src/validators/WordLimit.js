export default {
  getMessage (field, limit) {
    return `${field} må maksimalt indeholde ${limit} ord.`
  },

  validate (value, limit) {
    let words = value.split(' ')
    return words.length <= limit
  }
}
