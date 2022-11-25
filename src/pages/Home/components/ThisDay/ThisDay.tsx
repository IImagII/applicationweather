import * as React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'
import { Weather } from '../../../../store/types/types'
import s from './ThisDay.module.scss'

export interface IThisDayProps {
   weather: Weather
}

export function ThisDay({ weather }: IThisDayProps) {
   return (
      <div className={s.this__day}>
         <div className={s.top__block}>
            <div className={s.top__block_wrapper}>
               <div className={s.this__temp}>{Math.floor(weather.main.temp)}</div>
               <div className={s.this__day_name}>Сегодня</div>
            </div>
            <GlobalSvgSelector id='sun' />
         </div>
         <div className={s.botom__block}>
            <div className={s.this__time}>
               Время:<span>21:45</span>
            </div>
            <div className={s.this__city}>
               Город: <span>{weather.name}</span>
            </div>
         </div>
      </div>
   )
}
