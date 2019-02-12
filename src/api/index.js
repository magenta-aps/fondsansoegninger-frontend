import axios from 'axios'

const BASE_URL = 'http://alfrescodanva8080.magenta.dk/webapi/rest'

export default {
  sendApplication (formData) {
    const url = `${BASE_URL}`
    return axios.post(url, formData)
      .then(response => {
        console.log(response)
        return response.data
      })
  }
}
