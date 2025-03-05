import axios from 'axios'

const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

export const get = async (path, options = {}) => {
  const respone = await httpRequest.get(path, options)
  return respone.data
}

export default httpRequest
