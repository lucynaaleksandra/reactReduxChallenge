import React from "react"
import { connect } from 'react-redux'

function getCats() {
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
      })
      .catch(err => console.log(err))
  }
}


class Cats extends React.Component {

  componentDidMount() {
    let {
      getCats,
    } = this.props
    getCats()
  }

  render() {
    // var cats = [
    //   {
    //     id: 1, 
    //     name: "Abbykins",
    //     color: "Grey",
    //   },
    //   {
    //     id: 2,
    //     name: "Fluffykins",
    //     color: "White",
    //   }
    // ]
    // let kins = cats.map(cat => 
    //   <div key={cat.id}>{cat.name}</div>
    // )
    

    // let catsData = this.props.data.map(info =>
    //   <div>{info}</div>
    // )

    return (
      <div>
        <h2>Hello kins!</h2>
        <div>
          {/* {catsData} */}
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  ...state,
}), {
    getCats,
  })(Cats)