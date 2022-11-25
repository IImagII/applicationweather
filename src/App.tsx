import React, { useState } from 'react'
import { Home } from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics'
import { Error } from './pages/Error'
import { Header } from './shared/Header/Header'
import { Popup } from './shared/Popup/Popup'

function App() {
   return (
      <div className='global-contener'>
         {/* <Popup /> */}
         <div className='container'>
            <Header />
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/month-statistics' element={<MonthStatistics />} />
               <Route path='*' element={<Error />} />
            </Routes>
         </div>
      </div>
   )
}

export default App
