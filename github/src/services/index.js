import client from '../providers/client'

export default {
  getRepos: user => client.get(`users/${user}/repos`)
}
