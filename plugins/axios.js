export default function ({ $axios, store }) {
  if (process.client) {
    const organization = JSON.parse(localStorage.getItem('organization'))
    if (organization && organization.subdomain) {
      store.commit('setOrganization', organization)
    }
  }
}
