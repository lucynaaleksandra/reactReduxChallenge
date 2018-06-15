export default function reducer(state = {
  catsLoaded: false,
  data: [],
  loading: true,
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
    case "CATS_LOADER": 
      return {
        ...state, 
        loading: true,
      }
    default:
      return state
  }
}
