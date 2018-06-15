import React from 'react';
import reducer from './reducer'

import { FadeLoader } from 'react-spinners';
 

class Spinner extends React.Component {

  render() {
    let {
      loading
    } = this.props

    return (
      <div className='sweet-loading'>
        <FadeLoader
          color={rgba(225, 225, 225)} 
          loading={loading}
        />
      </div>
    )
  }
}
export default Spinner

console.log("spinner")
