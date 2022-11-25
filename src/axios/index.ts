import axios from 'axios'

const api = axios.create({
   baseURL: 'https://api.openweathermap.org/data/2.5',
})

api.interceptors.request.use(config => {
   config.url =
      config.url +
      '&units=metric' +
      '&lang=ru' +
      '&appid=' +
      '63ce1228a98be99822d6bd4651095f4e'
   return config
})

export default api
