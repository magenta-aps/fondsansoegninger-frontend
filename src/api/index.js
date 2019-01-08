import axios from 'axios'

const BASE_URL = 'http://localhost:3000/service'

export default {
  async apply (formData) {
    const url = `${BASE_URL}/submit`
    return axios.post(url, formData)
      .then(response => {
        console.log(response)
        return response.data
      })
  }
}
