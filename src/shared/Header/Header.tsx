import React, { useEffect, useState, useContext } from 'react'
import Select from 'react-select'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import { Theme } from '../../contents'
import { useTheme } from '../../hooks/useTheme'
import s from './Header.module.scss'

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
   const theme = useTheme()

   const options = [
      { value: 'kiev', label: 'Киев' },
      { value: 'donetsk', label: 'Донецк' },
      { value: 'toretsk', label: 'Торецк' },
   ]

   const colorStyles = {
      control: (styles: any) => ({
         ...styles,
         backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71,147,255,0.2)',
         width: '194px',
         height: '37px',
         border: 'none',
         borderRadius: '10px',
         zIndex: 100,
      }),
      singleValue: (styles: any) => ({
         ...styles,
         color: theme.theme === Theme.DARK ? '#fff' : '#000',
      }),
      menu: (styles: any) => ({
         ...styles,
         backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71,147,255,0.2)',
      }),
      option: (styles: any) => ({
         ...styles,
         color: theme.theme === Theme.DARK ? '#fff' : '#000',
      }),
      dropdownIndicator: (styles: any) => ({
         ...styles,
         color: theme.theme === Theme.DARK ? '#fff' : '#000',
      }),
   }

   const changeTheme = () => {
      theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
   }

   return (
      <header className={s.header}>
         <div className={s.wrapper}>
            <div className={s.logo}>
               <GlobalSvgSelector id='header-logo' />
            </div>
            <div className={s.title}>React weather</div>
         </div>
         <div className={s.wrapper}>
            <div className={s.change_theme} onClick={changeTheme}>
               <GlobalSvgSelector id='change-theme' />
            </div>
            <Select defaultValue={options[0]} styles={colorStyles} options={options} />
         </div>
      </header>
   )
}
