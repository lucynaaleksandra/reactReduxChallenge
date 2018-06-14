export default function reducer(state = {
  catsLoaded: false,
  data: [],
}, action) {
  switch (action.type) {
    case "GET_CATS_LISTING":
      return {
        ...state, 
      }
    case "GOT_CATS_LISTING":
      return {
        ...state,
        catsLoaded: true, 
        data: action.data,
      }
    default:
      return state
  }
}
