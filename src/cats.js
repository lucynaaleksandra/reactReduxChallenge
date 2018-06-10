import React from "react"

function getCats() {
  return fetch(`https://catrescue.herokuapp.com/petfinder/stpetersburg`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error("Request failed")
    })
    .catch(err => console.log(err))
}

export default class Cats extends React.Component {

  componentDidMount() {
    getCats()
  }

  render() {
    return (
      <div>
        <h3>Hello kitties!</h3>
      </div>
    )
  }
}
