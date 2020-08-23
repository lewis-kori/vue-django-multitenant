export default function ({ $axios }) {
  if (process.client) {
    const organization = localStorage.getItem('organization')
    if (organization && organization.subdomain) {
      $axios.setBaseURL(organization.subdomain)
    }
  }
}
