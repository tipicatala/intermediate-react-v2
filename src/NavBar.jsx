import React from 'react'
import { Link } from '@reach/router'
import { css } from '@emotion/react'

const NavBar = () => {
  return (
    <header
      css={css`
        background-color: #333;
        padding: 15px;
      `}
    >
      <Link to='/'>Adopt me!</Link>
      <span role='img' aria-label='logo'>
        🐶
      </span>
    </header>
  )
}

  export default NavBar