import './index.scss'
import React from "react"
import { connect } from 'react-redux'
import { FadeLoader } from 'react-spinners';
import PropTypes from 'prop-types'

import reducer from './reducer'
import getCats from './functions/getCats'


class Cats extends React.Component {

  static propTypes = {
    getCats: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
  }

  componentDidMount() {
    let {
      getCats,
      loading,
    } = this.props
    getCats()
  }


  render() {
    let {
      getCats,
      data,
      loading,
    } = this.props

    if (!Array.isArray(data)) {
      return <div>Loading</div>
    }

    let catsData = data.map(cat => {
      return (
        <div key={cat.id} className="cats-data">
          <img className="card-img" src={`${cat.photos[0]}`} />
          <h3>{cat.name}</h3>
          <p>{cat.description}</p>
        </div>
      )
    })

    return (
      <div>
        <div className="catsData">
          {catsData}
        </div>
      </div >
    )
  }
}

export default connect(state => ({
  ...state,
}), {
    loading: () => dispatch => dispatch({
      type: "CATS_LOADER",
    }),
    getCats,
  })(Cats)