export default function theme(state = 'darkblue', action = { type: '', payload: ''}) {
  if (action.type === 'CHANGE_THEME') {
    return action.payload
  } else {
    return state
  }
}