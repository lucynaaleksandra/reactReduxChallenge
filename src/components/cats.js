import '../index.scss'
import React from "react"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import getCats from '../actions/getCats'
import { setSpinning } from '../spinner/setSpinning'
import Cat from './cat'


class Cats extends React.Component {
  static propTypes = {
    getCats: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
  }

  componentDidMount() {
    let {
      getCats,
    } = this.props
    getCats()
  }

  render() {
    let {
      data,
    } = this.props

    if (!Array.isArray(data)) {
      return <div>Loading</div>
    }

    let catsData = data.map(cat => <Cat cat={cat} key={cat.id} />)

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
    setSpinning,
    getCats,
  })(Cats)