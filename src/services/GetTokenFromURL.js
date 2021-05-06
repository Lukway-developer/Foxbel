import config from '../config/index'

export const loginUrl = `${config.endpoint}?client_id=${config.clientId}&redirect_uri=${config.redirect}&scope=${config.scopes.join('%20')}&response_type=token&show_dialog=true`

export const getTokenFromURL = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      const parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])
      return initial
    }, {})
}
