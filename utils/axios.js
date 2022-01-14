const axios = require('axios')

const $axios = axios.default.create({
  baseURL: 'http://127.0.0.1:3000',
})

$axios.interceptors.response.use(undefined, (err) => {
  const response = err.response
  const status = response ? response.status : 408
  return Promise.reject(new RequestError(status, response))
})

export { $axios }

export class RequestError extends Error {
  constructor(status, response) {
    const message = response
      ? response.data?.message || 'Unknown Error'
      : 'Request timeout'
    super(message)
    this.status = status
    this.response = response
  }
}
