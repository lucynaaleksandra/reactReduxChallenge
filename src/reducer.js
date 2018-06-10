export default function reducer(state, action) {
  switch(action.type) {
    case "LISTING_REQUEST":
    case "LISTING_RESPONSE": 
      return {
        ...state
      }
  }
  return state
}
