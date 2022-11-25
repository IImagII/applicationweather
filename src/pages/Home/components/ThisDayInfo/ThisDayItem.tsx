import * as React from 'react'
import { IndicatorSvgSelector } from '../../../../assets/icons/indicators/IndicatorSvgSelector'
import { Item } from './ThisDayInfo'
import s from './ThisDayInfo.module.scss'

export interface IThisDayItemProps {
   item: Item
}

export function ThisDayItem({ item }: IThisDayItemProps) {
   const { icon_id, name, value } = item

   return (
      <div className={s.item}>
         <div className={s.indicator}>
            <IndicatorSvgSelector id={icon_id} />
         </div>
         <div className={s.indicator__name}>{name}</div>
         <div className={s.indicator__value}>{value}</div>
      </div>
   )
}
