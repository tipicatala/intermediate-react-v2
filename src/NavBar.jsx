import React from 'react'
import { Link } from '@reach/router'

const NavBar = () => {
  return (
    <header
    >
      <Link to='/'>Adopt me!</Link>
      <span role='img' aria-label='logo'>
        🐶
      </span>
    </header>
  )
}

  export default NavBar