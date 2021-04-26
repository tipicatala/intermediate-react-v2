import React, { useState, FunctionComponent, Dispatch } from 'react'

const useDropDown = (label: string, defaultState: string, options: string[]) => {
    const [state, setState] = useState(defaultState)
    const id = `use-drop-down-${label.replace(' ', '').toLowerCase()}`
    const DropDown: FunctionComponent = () => (
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

    return [state, DropDown, setState] as [string, FunctionComponent, Dispatch<string>]
}

export default useDropDown