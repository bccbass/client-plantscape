const devAPI = import.meta.env.VITE_API_HOST + import.meta.env.VITE_PORT
const prodAPI = import.meta.env.VITE_API_HOST

// Logic to determine whether in production or development environment.
// Sets correct api address - local vs deployed
const getAPIUrl = () => {
  if (import.meta.env.DEV) {
  return devAPI
}  else {
    return prodAPI}
  }

// assign appropriate api url to variable and export
const apiURL = getAPIUrl()

export default apiURL