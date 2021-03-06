import { setSpinning } from '../spinner/setSpinning'

export default function getCats() {
  return (dispatch) => {
    dispatch({
      type: "GET_CATS_LISTING",
    })

    fetch(`https://catrescue.herokuapp.com/petfinder/stpetersburg`)
      .then(response => {
        if (response.ok) {
          return response.json() 
        }
        throw new Error("Request failed") 
      })
      .then(data => {
        dispatch({
          type: "GOT_CATS_LISTING",
          data: data,
        })
        dispatch(setSpinning(false))
      })
      .catch(err => console.log(err))
  }
}
