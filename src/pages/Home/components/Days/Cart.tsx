import * as React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'
import { IDay } from './Days'
import s from './Days.module.scss'

export interface ICartProps {
   props: IDay
}

export function Cart({ props }: ICartProps) {
   const { day, day_info, icon_id, temp_day, temp_night, info } = props
   return (
      <div className={s.cart}>
         <div className={s.day}>{day}</div>
         <div className={s.day_info}>{day_info}</div>
         <div className={s.icon_id}>
            <GlobalSvgSelector id={icon_id} />
         </div>
         <div className={s.temp_day}>{temp_day}</div>
         <div className={s.temp_night}>{temp_night}</div>
         <div className={s.info}>{info}</div>
      </div>
   )
}
