export default function ({ $axios }) {
  if (process.client) {
    const protocol = 'http'
    const hostname = localStorage.getItem('hostname')
    if (hostname) {
      const port = 8000
      const url = `${protocol}://${hostname}:${port}/api/`
      $axios.setBaseURL(url)
    }
  }
}
