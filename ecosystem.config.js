module.exports = {
  apps: [
    {
      name: 'vue-django-multitenant',
      exec_mode: 'cluster',
      instances: 'max',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
    },
  ],
}
