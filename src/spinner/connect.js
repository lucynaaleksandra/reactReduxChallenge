// import '../styles/spinner.css'
import Spinner from './spinner'
import { connect } from 'react-redux'

export default connect(state => ({
  ...state.spinner
}))(Spinner) 