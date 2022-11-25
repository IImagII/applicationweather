import * as React from 'react'
import s from './Days.module.scss'

export interface ITabsProps {}
export interface ITab {
   value: string
}

export function Tabs(props: ITabsProps) {
   const tabs = [
      {
         value: 'На неделю',
      },
      {
         value: 'На 10 дней',
      },
      {
         value: 'На месяц',
      },
   ]

   return (
      <div className={s.tabs}>
         <div className={s.tabs__wrapper}>
            {tabs.map((tab: ITab) => (
               <div className={s.tab + ' ' + s.active} key={tab.value}>
                  {tab.value}
               </div>
            ))}
         </div>
         <div className={s.cansel}>Отменить</div>
      </div>
   )
}
