const devAPI = import.meta.env.VITE_API_HOST + import.meta.env.VITE_PORT
const prodAPI = import.meta.env.VITE_API_HOST

const getAPIUrl = () => {
  if (import.meta.env.DEV) {
  return devAPI
}  else {
    return prodAPI}
  }
  
const apiURL = getAPIUrl()

export default apiURL