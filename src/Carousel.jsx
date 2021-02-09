/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  }

  static getDerivedStateFromProps({ media }) {
    let photos = ['http://placecorgi.com/600/600']

    if (media.length) {
      photos = media.map(({ large }) => large)
    }

    return { photos }
  }

  handleIndexClick = (index) => {
    this.setState({
      active: index,
    })
  }

  render() {
    const { photos, active } = this.state

    return (
      <div className='carousel'>
        <img src={photos[active]} alt='animal'/>
        <div className='carousel-smaller'>
          {photos.map((photo, i) => (
            <img
              key={photo}
              onClick={() => this.handleIndexClick(i)}
              data-index={i}
              src={photo}
              className={i === active ? 'active' : ''}
              alt='animal thumbnail'
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel