export default {
  getMessage (field) {
    return `${field} skal indeholde et gyldigt CVR nummer.`
  },

  validate (value) {
    let badValues = [
      '00000000',
      '11111111',
      '22222222',
      '33333333',
      '44444444',
      '55555555',
      '66666666',
      '77777777',
      '88888888',
      '99999999'
    ]

    return badValues.indexOf(value) < 0
  }
}
