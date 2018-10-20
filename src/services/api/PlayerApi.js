import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8087',
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  responseType: 'json'
})

export default {
  getAllPlayers () {
    return api.get('/players')
        .then(res => {
          console.log('API Response: ', res)
          return res.data
        }).catch(err => {
          console.error('Error getting all players: ', err)
        })
  }
}
