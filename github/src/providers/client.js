import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: 'token efa9ffa07595e76bfd35d4ef09fbe800c26ae310'
  }
})
