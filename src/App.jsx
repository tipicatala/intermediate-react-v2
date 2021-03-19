import React, { useState, lazy, Suspense } from 'react'
import { Router } from '@reach/router'

import ThemeContext from './ThemeContext'
import NavBar from './NavBar.jsx'

const Details = lazy(() => import('./Details'))
const SearchParams = lazy(() => import('./SearchParams'))

const App = () => {
  const themeHook = useState('peru')
  
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <NavBar/>
        <Suspense fallback={<h1>loading route...</h1>}>
        <Router>
          <SearchParams path='/'/>
          <Details path='/details/:id'/>
        </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  )
}

export default App