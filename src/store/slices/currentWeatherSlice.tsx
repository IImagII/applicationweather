import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Weather } from '../types/types'
import { AxiosResponse } from 'axios'
import { fetchCurrentWeather } from '../thunks/fetchCurrentWeather'

type CurrentWeather = {
   weather: Weather
   isLoading: boolean
   response: Response
}
type Response = {
   status: number
   message: string
}
const initialState: CurrentWeather = {
   weather: {
      main: {
         temp: 0,
      },

      name: '',
   },
   isLoading: false,
   response: {
      status: 0,
      message: '',
   },
}

export const currentWeatherSlice = createSlice({
   name: 'current_weather',
   initialState,
   reducers: {
      fetchCurrentLoading(state) {
         state.isLoading = true
      },
      fetchCurrentWeatherSuccesses(state, action: PayloadAction<AxiosResponse<Weather>>) {
         state.weather = action.payload.data
         state.isLoading = false
         state.response = {
            status: action.payload.status,
            message: action.payload.statusText,
         }
      },
      fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<Weather>>) {
         state.isLoading = false
         state.response = {
            status: action.payload.status,
            message: action.payload.statusText,
         }
      },
   },
})

export default currentWeatherSlice.reducer
export const { fetchCurrentLoading, fetchCurrentWeatherSuccesses, fetchCurrentWeatherError } = currentWeatherSlice.actions
