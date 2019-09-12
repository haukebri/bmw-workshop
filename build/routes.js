const axios = require('axios')

async function generateRoutes(accessToken) {
  const response = await axios.get(
    'https://api.storyblok.com/v1/cdn/links/?token=ZbXkLqrfeQqOOBsTnfR6xgtt'
  )

  const test = Object.values(response.data.links).map((link) => link.slug)

  const routes = test

  // Add home alias
  routes.push('/')

  return routes
}
module.exports = { generateRoutes }
