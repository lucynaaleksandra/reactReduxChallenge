function setSpinning(spinning) {
  return (dispatch, getState) => {
    dispatch({
      type: "IS_SPINNING",
      isSpinning: spinning, 
    })
  }
}
export { setSpinning }