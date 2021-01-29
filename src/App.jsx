import React from 'react'
import { render } from 'react-dom'
// import Pet from './Pet.jsx'
import SearchParams from './SearchParams.jsx'

const App = () => {
  return (
    <div>
      <h1>Adopt me</h1>
      <SearchParams/>
    </div>
  )
}

render(<App/>, document.getElementById("root"));
