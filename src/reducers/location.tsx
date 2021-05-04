export default function location(state = 'Seattle, WA', action = { type: '', payload: ''}) {
  if (action.type === 'CHANGE_LOCATION') {
    return action.payload
  } else {
    return state
  }
}