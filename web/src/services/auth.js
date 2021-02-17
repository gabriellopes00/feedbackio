export default httpClient => ({
  login: async ({ email, password }) => {
    let errors = null
    const response = await httpClient.post('/auth/login', { email, password })
    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.requestText
      }
    }
    return { data: response.data, errors }
  }
})
