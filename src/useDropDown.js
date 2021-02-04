import React, { useState } from 'react'

const useDropDown = (label, defaultState, options) => {
    const [state, setState] = useState(defaultState)
    const id = `use-drop-down-${label.replace(' ', '').toLowerCase()}`
    const DropDown = () => (
        <label htmlFor={id}>
        {label}
        <select
          id={id}
          value={state}
          onChange={e => setState(e.target.value)}
          onBlur={e => setState(e.target.value)}
          disabled={!options.length}
        >
          <option>All</option>
          {options.map(el => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
      </label>
    )

    return [state, DropDown, setState]
}

export default useDropDown