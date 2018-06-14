import './index.scss'
import React from "react"
import { connect } from 'react-redux'

import reducer from './reducer'
import getCats from './functions/getCats'


class Cats extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      let {
        getCats,
      } = this.props
      getCats()
    }, 1000)
  }

  render() {
    let {
      getCats,
      data,
    } = this.props

    if (!Array.isArray(data)) {
      return <div>Loading</div>
    }

    let catsData = data.map(cat => {
      let styles = { "backgroundImage": `url(${cat.photos[0]})` }
      return (
        <div key={cat.id} className="cats-data">
          <div className="cats-photo" style={styles} />
          <div>
            <div className="cats-info">
              <h3>{cat.name}</h3>
            </div>
            <p>{cat.description}</p>
          </div>
        </div>
      )
    })

    return (
      <div key="cats-data" className="cats-data">
        {/* <h2>Hello kins!</h2> */}
        <div>
          {catsData}
        </div>
      </div >
    )
  }
}

export default connect(state => ({
  ...state,
}), {
    getCats,
  })(Cats)
