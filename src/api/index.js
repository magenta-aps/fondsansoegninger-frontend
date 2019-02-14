import axios from 'axios'

const BASE_URL = process.env.VUE_APP_API_ENDPOINT

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
