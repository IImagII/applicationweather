import { WeatherService } from '../../services/WeatherService'
import { fetchCurrentLoading, fetchCurrentWeatherError, fetchCurrentWeatherSuccesses } from '../slices/currentWeatherSlice'
import { AppDispatch } from '../store'

export const fetchCurrentWeather = (payload: string) => async (dispatch: AppDispatch) => {
   try {
      dispatch(fetchCurrentLoading())
      const res = await WeatherService.getCurrentWeather(payload)
      if (res.status === 200) {
         dispatch(fetchCurrentWeatherSuccesses(res))
      } else {
         dispatch(fetchCurrentWeatherError(res))
      }
   } catch (error) {
      console.log(error)
   }
}
