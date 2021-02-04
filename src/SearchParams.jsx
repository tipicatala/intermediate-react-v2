import React, { useState, useEffect } from 'react'
import pet, { ANIMALS } from '@frontendmasters/pet'

import useDropDown from './useDropDown'

import Results from './Results.jsx'

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA")
  const [breeds, setBreeds] = useState([])
  const [animal, AnimalDropDown] = useDropDown('Animal','dog', ANIMALS)
  const [breed, BreedDropDown, setBreed] = useDropDown('Breed','', breeds)
  const [pets, setPets] = useState([])

  const requestPets = async () => {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    })

    setPets(animals || [])
  }

  useEffect(() => {
    setBreeds([])
    setBreed('')

    pet.breeds(animal).then(({ breeds }) => {
      const breed = breeds.map(({ name }) => name)
      setBreeds(breed)
    }, console.error)
  }, [animal, setBreeds, setBreed])

  return (
    <div className="search-params">
      <form onSubmit={(e) => {
        e.preventDefault()
        requestPets()
      }}>
        <label htmlFor="location">
          location
          <input 
            id="location"
            value={location}
            placeholder="location"
            onChange={e => 
              setLocation(e.target.value)
            }
          />
        </label>
        <AnimalDropDown/>
        <BreedDropDown/>
        <button>Submit</button>
      </form>
      <Results pets={pets}/>
    </div>
  )
}

export default SearchParams