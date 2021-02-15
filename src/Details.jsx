import React from 'react'
import pet from '@frontendmasters/pet'

import Carousel from './Carousel.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import { navigate } from '@reach/router'
import Modal from './Modal'
import ThemeContext from './ThemeContext'
class Details extends React.Component {
  state = { loading: true, showModal: false }

  componentDidMount () {
    pet.animal(this.props.id)
    .then(({ animal }) => {
      this.setState({
        url: animal.url,
        name: animal.name,
        animal: animal.type,
        locatiom: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      })
    }, console.error)
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal })
  adopt = () => navigate(this.state.url)

  render () {
    if (this.state.loading) {
      return <h1>loading...</h1>
    }

    const { animal, breed, location, description, media, name, showModal } = this.state

    return (
      <div className='details'>
        <Carousel media={media}/>
        <div>
          <h1>
            {name}
          </h1>
          <h2>
            {`${animal} -${breed} - ${location}`}
          </h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{
                  backgroundColor: theme
                }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {
            showModal ? (
              <Modal>
                <h1>adapt ?</h1>
                <div className='buttons'>
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No, I am a monster</button>
                </div>
              </Modal>
            ): null}
        </div>
      </div>
    )
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props}/>
    </ErrorBoundary>
  )
}