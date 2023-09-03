const devAPI = import.meta.env.VITE_API_HOST + import.meta.env.VITE_PORT
const prodAPI = import.meta.env.VITE_API_HOST

// Logic to determine what environment app is running in (development or production)
const getAPIUrl = () => {
  if (import.meta.env.DEV) {
  return devAPI
}  else {
    return prodAPI}
  }
  
// store API url in variable apiURL and export url for use throughout app
const apiURL = getAPIUrl()

export default apiURL