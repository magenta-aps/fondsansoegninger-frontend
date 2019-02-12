import axios from 'axios'

const BASE_URL = 'http://localhost:8080/webapi/rest'

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
