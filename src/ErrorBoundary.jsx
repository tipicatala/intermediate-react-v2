import React from 'react'
import { Link } from '@reach/router'

class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log('error', error, info)
  }

  render () {
    if(this.state.hasError) {
      return (
        <h1>
          error occured
          <Link to='/'>
            Click to go back
          </Link>
        </h1>
      )
    }
    return this.props.children 
  }
}

export default ErrorBoundary